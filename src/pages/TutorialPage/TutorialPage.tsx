import React from 'react';
import styles from './TutorialPage.module.css';
import Card from 'components/Card/Card';

const TutorialPage: React.FC = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <button className={styles.backButton}>Back</button>
        <h1 className={styles.title}>How To Play</h1>
      </header>
      <div className={styles.cardContainer}>
        <Card title="Step 1" stepName="Choose a Category" text="Lorem ipsum dolor sit amet, consectetur adipiscing elit." />
        <Card title="Step 2" stepName="Guess the Word" text="Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />
        <Card title="Step 3" stepName="Win or Lose" text="Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat." />
      </div>
    </div>
  );
};

export default TutorialPage;