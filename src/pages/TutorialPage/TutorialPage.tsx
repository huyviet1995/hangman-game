import React from "react";
import styles from "./TutorialPage.module.css";
import Card from "components/Card/Card";
import { useNavigate } from "react-router-dom";
import { steps } from "./tutorialData";
import cn from "classnames";

const TutorialPage: React.FC = () => {
    const navigate = useNavigate();
    const handleBackClick = () => {
        navigate("/");
    };
    const containerClasses = cn(styles.container, "p-12 h-full");
    const headerClasses = cn(styles.header, "mb-12");
    return (
        <div className={containerClasses}>
            <header className={headerClasses}>
                <div className={styles.buttonWrapper}>
                  <button className={styles.backButton} onClick={handleBackClick} />
                </div>
                <h1 className={styles.title}>How To Play</h1>
            </header>
            <div className={styles.cardContainer}>
                {steps.map((step) => 
                    <Card
                        key={step.title}
                        className={styles.card}
                        {...step}
                    />
                )}
            </div>
        </div>
    );
};

export default TutorialPage;
