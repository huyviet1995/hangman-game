import React from 'react';
import styles from './Card.module.css';

interface CardProps {
  title: string;
  stepName: string;
  text: string;
}

const Card: React.FC<CardProps> = ({ title, stepName, text }) => {
  return (
    <div className={styles.card}>
      <h2 className={styles.cardTitle}>{title}</h2>
      <h3 className={styles.stepName}>{stepName}</h3>
      <p className={styles.text}>{text}</p>
    </div>
  );
};

export default Card;