import React from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";

const HangmanGame: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const handleBackClick = () => {
        console.log("Handle back click heree.....");
    }
    const headerClasses = cn(styles.header, "mb-12");
    return (
        <div className={styles.container}>
            <Header 
                handleBackClick={handleBackClick}
                className={headerClasses}
                title={"Hangman Game - " + category}
            />
        </div>
    );
};

export default HangmanGame;
