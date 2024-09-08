import React from 'react';
import styles from './LandingPage.module.css';
import MenuCard from 'components/MenuCard/MenuCard';

const LandingPage: React.FC = () => {
  return (
	<div className={styles.landingContainer}>
		<MenuCard />
	</div>
  );
};

export default LandingPage;