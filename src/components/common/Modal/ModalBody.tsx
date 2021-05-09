import classNames from 'classnames';
import React from 'react';

export interface ModalBodyProps {
  children: React.ReactNode;
  className?: string;
}

const ModalBody = ({ children, className }: ModalBodyProps) => (
  <div className={classNames(className, 'modal-body bg-white p-5')}>{children}</div>
);

export default ModalBody;
