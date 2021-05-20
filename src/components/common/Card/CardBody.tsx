import classNames from 'classnames';
import React from 'react';

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardBody: React.FC<CardBodyProps> = ({ className, children, ...props }) => (
  <div className={classNames(className, 'p-5')} {...props}>
    {children}
  </div>
);

export default CardBody;
