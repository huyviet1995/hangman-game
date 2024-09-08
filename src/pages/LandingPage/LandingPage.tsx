import React from 'react';
import styles from './LandingPage.module.css';

const LandingPage: React.FC = () => {
  return (
	<div className={styles.loadingContainer}>
	  <div className={styles.menu}>
		<h1 className={styles.title}>Game Title</h1>
		<button className={styles.playButton}>Play</button>
		<button className={styles.howToPlayButton}>How to Play</button>
	  </div>
	</div>
  );
};

export default LandingPage;