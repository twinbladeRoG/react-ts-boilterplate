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
  scrollable?: boolean;
  disbaledBackdropPress?: boolean;
}

const Modal = ({
  show,
  centered,
  children,
  onClose,
  scrollable,
  disbaledBackdropPress,
}: ModalProps) => {
  const handleClose = () => {
    if (onClose !== undefined) {
      onClose();
    }
  };

  const handleRequestClose = () => {
    if (!disbaledBackdropPress && onClose !== undefined) {
      onClose();
    }
  };

  return (
    <ModalContext.Provider value={{ onClose: handleClose }}>
      <ReactModal
        ariaHideApp={false}
        isOpen={show}
        onRequestClose={handleRequestClose}
        overlayClassName={classNames('modal-overlay', 'fixed w-full h-full overflow-y-auto')}
        className={classNames(
          'modal-dailog relative mx-auto my-7',
          'w-auto max-w-none sm:max-w-screen-lg',
          'border-0 outline-none',
          centered && 'centered flex items-center',
          scrollable && 'modal-dialog-scrollable ',
        )}
      >
        <div
          className={classNames(
            'modal-content border-0 outline-none relative flex flex-col w-full h-full',
          )}
        >
          {children}
        </div>
      </ReactModal>
    </ModalContext.Provider>
  );
};

Modal.defaultProps = {
  show: false,
  onClose: () => {},
  centered: false,
  scrollable: false,
  disbaledBackdropPress: false,
};

Modal.Header = ModalHeader;
Modal.Body = ModalBody;
Modal.Footer = ModalFooter;

export default Modal;
