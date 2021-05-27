import classNames from 'classnames';
import React from 'react';

interface CardTitleProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardTitle: React.FC<CardTitleProps> = ({ className, children, ...props }) => (
  <h6 className={classNames(className, 'font-medium text-lg')} {...props}>
    {children}
  </h6>
);

export default CardTitle;
