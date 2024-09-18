import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';
interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

const Card: React.FC<CardProps> = ({ children, className, ...props }) => {
  const cardClasses = cn(styles.card, className);
  return <div className={cardClasses} {...props}>{children}</div>;
};

export default Card;