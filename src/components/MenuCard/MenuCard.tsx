import React from 'react';
import styles from './MenuCard.module.css';

const MenuCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Game Title</h1>
      <button className={styles.playButton}>Play</button>
      <button className={styles.howToPlayButton}>How to Play</button>
    </div>
  );
};

export default MenuCard;