import React from 'react';
import styles from './MenuCard.module.css';
import { ReactComponent as HangmanTitle } from './hangman-title.svg'

const MenuCard: React.FC = () => {
  return (
    <div className={styles.container}>
      <HangmanTitle className={styles.title} />
      <button className={styles.playButton}>Play</button>
      <button className={styles.howToPlayButton}>How to Play</button>
    </div>
  );
};

export default MenuCard;