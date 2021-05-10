import classNames from 'classnames';
import React from 'react';

export interface ModalBodyProps {
  className?: string;
}

const ModalBody: React.FC<ModalBodyProps> = ({ children, className }) => (
  <div className={classNames(className, 'modal-body bg-white p-5')}>{children}</div>
);

export default ModalBody;
