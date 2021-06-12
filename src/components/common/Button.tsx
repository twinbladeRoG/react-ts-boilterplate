import React from 'react';
import classNames from 'classnames';
import { ColorVariant } from '../../types';
import Spinner from './Spinner/Spinner';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  buttonStyle?: 'default' | 'outline' | 'plain';
  variant?: ColorVariant;
  loadingText?: string;
  size?: 'sm' | 'lg';
}

export type ButtonComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLButtonElement> & ButtonProps
>;

/**
 * Primary UI component for user interaction
 */
const Button: ButtonComponent = React.forwardRef(
  (
    { className, isLoading, loadingText, disabled, children, variant, buttonStyle, size, ...props },
    ref,
  ) => {
    const getButtonClasses = React.useCallback(() => {
      if (buttonStyle === 'default') {
        return `bg-${variant} focus:bg-${variant} hover:bg-${variant}-dark ring-${variant}-dark`;
      }

      if (buttonStyle === 'outline') {
        return classNames(
          'bg-transparent border-2',
          variant === 'dark' ? 'text-black' : `text-${variant}`,
          variant === 'dark'
            ? 'focus:text-black hover:text-black'
            : `focus:text-${variant}-dark hover:text-${variant}-dark`,
          `focus:bg-${variant} hover:bg-${variant}`,
          `ring-${variant}-dark`,
          variant === 'dark' ? 'border-black' : `border-${variant}`,
        );
      }

      if (buttonStyle === 'plain') {
        return classNames(
          'bg-transparent',
          variant === 'dark' ? 'text-black' : `text-${variant}`,
          `focus:bg-${variant}-dark focus:bg-opacity-20`,
          `hover:bg-${variant}-dark hover:bg-opacity-20`,
          `ring-${variant}-dark`,
        );
      }

      return '';
    }, [variant, buttonStyle]);

    return (
      <button
        type="button"
        {...props}
        ref={ref}
        className={classNames(
          className,
          'btn px-4 py-2',
          getButtonClasses(),
          'font-medium shadow rounded',
          'focus:outline-none focus:ring-4 focus:shadow-lg hover:shadow-xl',
          'transition duration-300 ease-in-out',
          isLoading ? 'cursor-wait' : disabled ? 'cursor-not-allowed' : 'cursor-pointer',
          disabled && !isLoading && 'opacity-80',
          isLoading && 'animate-pulse',
          size === 'sm' ? 'text-sm' : '',
          size === 'lg' ? 'text-lg' : '',
        )}
        disabled={disabled || isLoading}
      >
        {isLoading ? (
          <>
            <Spinner />
            {loadingText ? <span className="ml-3">{loadingText}</span> : null}
          </>
        ) : (
          children
        )}
      </button>
    );
  },
);

Button.defaultProps = {
  isLoading: false,
  variant: 'primary',
  buttonStyle: 'default',
};

Button.displayName = 'Button';

export default Button;
