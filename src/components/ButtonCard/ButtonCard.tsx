import React from 'react';
import Card from 'components/Card/Card';
import styles from './ButtonCard.module.css';
import cn from 'classnames';

interface ButtonCardProps {
  text: string;
  className?: string;
  onClick?: () => void;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ text, className, onClick }) => {
  const buttonClasses = cn(styles.container, className);

  return (
    <Card className={buttonClasses} onClick={onClick}>
        {text}
    </Card>
  );
};

export default ButtonCard;