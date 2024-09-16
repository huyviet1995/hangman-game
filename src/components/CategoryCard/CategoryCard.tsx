import React from 'react';
import Card from 'components/Card/Card';
import styles from './CategoryCard.module.css';
import cn from 'classnames';

interface CardCategoryProps {
  title: string;
  stepName: string;
  text: string;
  className?: string;
}

const CategoryCard: React.FC<CardCategoryProps> = ({ title, stepName, text, className }) => {
  const cardClasses = cn(className, styles.card);
  return (
    <Card className={cardClasses}>
      <h2 className={`${styles.cardTitle} my-0`}>{title}</h2>
      <h3 className={styles.stepName}>{stepName}</h3>
      <p className={styles.text}>{text}</p>
    </Card>
  );
};

export default CategoryCard;