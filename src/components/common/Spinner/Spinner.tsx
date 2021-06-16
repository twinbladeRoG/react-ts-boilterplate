import classNames from 'classnames';
import React from 'react';
import { ColorVariant } from '../../../types';

interface SpinnerProps extends React.SVGProps<SVGElement> {
  size?: number;
  variant?: ColorVariant;
}

const Spinner: React.FC<SpinnerProps> = ({ size, className, variant }) => (
  <svg
    className={classNames(className, 'animate-spin inline-block', `text-${variant}`)}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    style={{ width: `${size}px`, height: `${size}px` }}
    viewBox="0 0 24 24"
  >
    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    />
  </svg>
);

Spinner.defaultProps = {
  size: 16,
  variant: 'primary',
};

export default Spinner;
