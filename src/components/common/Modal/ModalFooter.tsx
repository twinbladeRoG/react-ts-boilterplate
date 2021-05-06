import classNames from 'classnames';
import React from 'react';

export interface ModalFooterProps {
  children: React.ReactNode;
  className?: string;
  align?: 'left' | 'right' | 'center';
}

const ModalFooter = ({ children, className, align }: ModalFooterProps) => {
  const getAlignment = React.useCallback(() => {
    switch (align) {
      case 'left':
        return 'text-left';
      case 'center':
        return 'text-center';
      case 'right':
        return 'text-right';

      default:
        return 'text-right';
    }
  }, [align]);

  return (
    <div
      className={classNames(
        className,
        getAlignment(),
        'modal-footer',
        'bg-white p-5',
        'rounded-b-2xl border-t border-gray-200',
      )}
    >
      {children}
    </div>
  );
};

ModalFooter.defaultProps = {
  align: 'right',
};

export default ModalFooter;
