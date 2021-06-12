import classNames from 'classnames';
import React from 'react';

interface CardHeaderProps extends React.HTMLAttributes<HTMLDivElement> {}

const CardHeader: React.FC<CardHeaderProps> = ({ className, children, ...props }) => (
  <div
    className={classNames(className, 'p-5 border-b border-light dark:border-dark rounded-t-lg')}
    {...props}
  >
    {children}
  </div>
);

export default CardHeader;
