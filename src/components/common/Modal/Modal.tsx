import classNames from 'classnames';
import React from 'react';
import ReactModal from 'react-modal';
import { Transition } from 'react-transition-group';
import { ENTERED, ENTERING, EXITED, EXITING } from 'react-transition-group/Transition';
import ModalBody from './ModalBody';
import ModalContext from './ModalContext';
import ModalFooter from './ModalFooter';
import ModalHeader from './ModalHeader';

export interface ModalProps {
  show: boolean;
  onClose?(): void;
  centered?: boolean;
  scrollable?: boolean;
  disbaledBackdropPress?: boolean;
}

type ModalComponent = React.FC<ModalProps> & {
  Body: typeof ModalBody;
  Header: typeof ModalHeader;
  Footer: typeof ModalFooter;
};

const DURATION = 300;

const fadeStyles: { [key: string]: string } = {
  [ENTERING]: 'show',
  [ENTERED]: 'show',
  [EXITING]: 'exiting',
  [EXITED]: 'exit',
};

const Modal: ModalComponent = ({
  show,
  centered,
  children,
  onClose,
  scrollable,
  disbaledBackdropPress,
}) => {
  const [open, setOpen] = React.useState(false);

  React.useEffect(() => {
    if (show) {
      setTimeout(() => setOpen(true), DURATION);
    }
  }, [show]);

  const handleClose = () => {
    if (onClose !== undefined) {
      setOpen(false);
      setTimeout(() => onClose(), DURATION);
    }
  };

  const handleRequestClose = () => {
    if (!disbaledBackdropPress && onClose !== undefined) {
      setOpen(false);
      setTimeout(() => onClose(), DURATION);
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
        <Transition in={open} timeout={DURATION}>
          {state => (
            <div
              className={classNames(
                'modal-content border-0 outline-none relative flex flex-col w-full h-full',
                fadeStyles[state],
              )}
            >
              {children}
            </div>
          )}
        </Transition>
      </ReactModal>
    </ModalContext.Provider>
  );
};

Modal.displayName = 'Modal';
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
