import classNames from 'classnames';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import ModalContext from './ModalContext';

export interface ModalHeaderProps {
  closeButton?: boolean;
  children: React.ReactNode;
  className?: string;
}

const ModalHeader = ({ closeButton, children, className }: ModalHeaderProps) => {
  const context = React.useContext(ModalContext);

  const handleClose = () => {
    if (context) context.onClose();
  };

  return (
    <div
      className={classNames(
        className,
        'modal-header',
        'bg-white p-5',
        'rounded-t-2xl border-b border-gray-200',
      )}
    >
      {children}

      {closeButton && (
        <button type="button" onClick={handleClose}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </div>
  );
};

export default ModalHeader;
