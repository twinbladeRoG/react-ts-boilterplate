import classNames from 'classnames';
import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  color?: string;
  pill?: boolean;
}

const Badge: React.FC<BadgeProps> = ({ className, children, color, pill }) => {
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
    <span
      className={classNames(
        className,
        'text-xs text-white px-4 py-1',
        `bg-${getActiveColor()}`,
        pill ? 'rounded-full' : 'rounded-md',
      )}
    >
      {children}
    </span>
  );
};

Badge.defaultProps = {
  color: 'blue-400',
  pill: false,
};

export default Badge;
