import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dialog } from '@headlessui/react';
import classNames from 'classnames';
import React from 'react';
import ModalContext from './ModalContext';

export interface ModalHeaderProps extends React.HTMLProps<HTMLElement> {
  closeButton?: boolean;
}
const ModalHeader: React.FC<ModalHeaderProps> = ({ closeButton, className, children }) => {
  const { onClose } = React.useContext(ModalContext);

  return (
    <Dialog.Title
      as="h3"
      className={classNames(className, 'flex text-lg font-medium leading-6 text-gray-900')}
    >
      {children}

      {closeButton && (
        <button type="button" onClick={onClose} className="ml-auto">
          <FontAwesomeIcon icon={faTimes} />
        </button>
      )}
    </Dialog.Title>
  );
};

export default ModalHeader;
