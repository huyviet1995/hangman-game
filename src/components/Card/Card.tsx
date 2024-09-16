import React from 'react';
import styles from './Card.module.css';
import cn from 'classnames';

interface CardProps {
  title: string;
  stepName: string;
  text: string;
  className?: string;
}

const Card: React.FC<CardProps> = ({ title, stepName, text, className }) => {
  const cardClasses = cn(styles.card, className);
  return (
    <div className={cardClasses}>
      <h2 className={`${styles.cardTitle} my-0`}>{title}</h2>
      <h3 className={styles.stepName}>{stepName}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;