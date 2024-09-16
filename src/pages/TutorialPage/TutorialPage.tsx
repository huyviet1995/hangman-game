import React from "react";
import styles from "./TutorialPage.module.css";
import CardCategory from "components/CategoryCard/CategoryCard";
import { useNavigate } from "react-router-dom";
import Header from "components/Header/Header";
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
            <Header
                handleBackClick={handleBackClick}
                className={headerClasses}
                title={"How to play"}
            />
            <div className={styles.cardContainer}>
                {steps.map((step) => (
                    <CardCategory
                        key={step.title}
                        className={styles.card}
                        {...step}
                    />
                ))}
            </div>
        </div>
    );
};

export default TutorialPage;
