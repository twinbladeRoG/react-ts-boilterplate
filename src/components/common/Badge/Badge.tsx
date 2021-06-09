import classNames from 'classnames';
import React from 'react';
import { ColorVariant, VariantType } from '../../../types';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: ColorVariant;
  variantType?: VariantType;
  pill?: boolean;
}

export type BadgeComponent = React.ForwardRefExoticComponent<
  React.RefAttributes<HTMLButtonElement> & BadgeProps
>;

const Badge: BadgeComponent = React.forwardRef(
  ({ className, children, variant, variantType, pill, ...props }, ref) => (
    <span
      ref={ref}
      {...props}
      className={classNames(
        className,
        'text-xs px-4 py-1 font-semibold',
        `bg-${variant}${variantType !== 'default' ? `-${variantType}` : ''}`,
        variant === 'dark' ? 'text-white' : '',
        variantType !== 'light' && variant !== 'light' ? 'text-white dark:text-black' : '',
        pill ? 'rounded-full' : 'rounded-md',
      )}
    >
      {children}
    </span>
  ),
);

Badge.defaultProps = {
  variant: 'primary',
  variantType: 'default',
  pill: false,
};

export default Badge;
