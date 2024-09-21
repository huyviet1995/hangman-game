import React from 'react';
import Card from 'components/Card/Card';
import styles from './ButtonCard.module.css';
import cn from 'classnames';

interface ButtonCardProps {
  text: string;
  className?: string;
  onClick?: () => void;
  isPlaceholder?: boolean;
}

const ButtonCard: React.FC<ButtonCardProps> = ({ text, className, onClick, isPlaceholder = false }) => {
  const buttonClasses = cn(styles.container, className, { [styles.placeholder]: isPlaceholder });

  return (
    <Card className={buttonClasses} onClick={onClick}>
        {text}
    </Card>
  );
};

export default ButtonCard;