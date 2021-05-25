import classNames from 'classnames';
import React from 'react';

interface SpinnerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number;
  color?: string;
}

const Spinner: React.FC<SpinnerProps> = ({ color, size, className }) => (
  <div
    className={classNames(className, 'spinner-ring')}
    style={{ width: `${size}px`, height: `${size}px` }}
  >
    <div
      style={{
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: `${(size ?? 0) * 0.1}px`,
        width: `${(size ?? 0) * 0.8}px`,
        height: `${(size ?? 0) * 0.8}px`,
      }}
    />
    <div
      style={{
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: `${(size ?? 0) * 0.1}px`,
        width: `${(size ?? 0) * 0.8}px`,
        height: `${(size ?? 0) * 0.8}px`,
      }}
    />
    <div
      style={{
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: `${(size ?? 0) * 0.1}px`,
        width: `${(size ?? 0) * 0.8}px`,
        height: `${(size ?? 0) * 0.8}px`,
      }}
    />
    <div
      style={{
        borderColor: `${color} transparent transparent transparent`,
        borderWidth: `${(size ?? 0) * 0.1}px`,
        width: `${(size ?? 0) * 0.8}px`,
        height: `${(size ?? 0) * 0.8}px`,
      }}
    />
  </div>
);

Spinner.defaultProps = {
  color: '#1d4ed8',
  size: 40,
};

export default Spinner;
