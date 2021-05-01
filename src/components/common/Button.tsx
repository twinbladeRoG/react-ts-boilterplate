/* eslint-disable react/button-has-type */
import React from 'react';
import classnames from 'classnames';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  color: string;
}

const Button = ({ color, isLoading, className, disabled, children, ...props }: ButtonProps) => {
  const getActiveColor = React.useCallback(() => {
    const colorStrength: string = String(String(color).split('-').pop());

    try {
      const currentColorStrength = Number.parseInt(colorStrength, 10);
      let activeColorStrength = currentColorStrength;

      if (currentColorStrength === 50) {
        activeColorStrength = 100;
      } else if (currentColorStrength === 900) {
        activeColorStrength = 800;
      } else {
        activeColorStrength = currentColorStrength + 100;
      }

      return `${String(color).substring(
        0,
        String(color).length - colorStrength.length,
      )}${activeColorStrength}`;
    } catch (error) {
      return 'bg-blue-500';
    }
  }, [color]);

  return (
    <button
      {...props}
      className={classnames(
        className,
        'text-white font-medium px-4 py-2 shadow rounded',
        'focus:outline-none focus:ring-4 focus:shadow-lg hover:shadow-lg',
        'transition duration-300 ease-in-out',
        `bg-${color} focus:bg-${getActiveColor()} hover:bg-${getActiveColor()} ring-${color}`,
        isLoading ? 'cursor-wait' : disabled ? 'cursor-not-allowed' : 'cursor-pointer',
        disabled && !isLoading && 'opacity-80',
        isLoading && 'animate-pulse',
      )}
      disabled={disabled || isLoading}
    >
      {isLoading ? (
        <svg
          className="animate-spin h-6 w-6 text-white inline-block"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
        >
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      ) : (
        children
      )}
    </button>
  );
};

Button.defaultProps = {
  color: 'blue-400',
  isLoading: false,
};

export default Button;
