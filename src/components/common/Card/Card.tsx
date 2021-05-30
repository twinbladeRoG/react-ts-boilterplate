import classNames from 'classnames';
import React from 'react';
import CardBody from './CardBody';
import CardHeader from './CardHeader';
import CardImage from './CardImage';
import CardTitle from './CardTitle';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {}

export type CardComponent = React.FC<CardProps> & {
  Header: typeof CardHeader;
  Title: typeof CardTitle;
  Body: typeof CardBody;
  Image: typeof CardImage;
};

const Card: CardComponent = ({ className, children, ...props }) => (
  <div {...props} className={classNames(className, 'bg-white border shadow-lg rounded-lg')}>
    {children}
  </div>
);

Card.Header = CardHeader;
Card.Title = CardTitle;
Card.Body = CardBody;
Card.Image = CardImage;

export default Card;
