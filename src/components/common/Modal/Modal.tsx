import classNames from 'classnames';
import React from 'react';
import ReactModal from 'react-modal';
import ModalBody from './ModalBody';
import ModalContext from './ModalContext';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export interface ModalProps {
  show: boolean;
  onClose?(): void;
  centered?: boolean;
  children: React.ReactNode;
}

const Modal = ({ show, centered, children, onClose }: ModalProps) => {
  const handleClose = () => {
    if (onClose !== undefined) {
      onClose();
    }
  };

  return (
    <ModalContext.Provider value={{ onClose: handleClose }}>
      <ReactModal
        isOpen={show}
        onRequestClose={onClose}
        className={classNames(
          'modal-content',
          centered && 'centered',
          'w-auto border-0 my-7 mx-auto max-w-none sm:max-w-screen-lg',
        )}
      >
        {children}
      </ReactModal>
    </ModalContext.Provider>
  );
};

Modal.defaultProps = {
  show: false,
  onClose: () => {},
  centered: false,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
