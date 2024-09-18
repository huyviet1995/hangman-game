import React from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";

const HangmanGame: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Hangman Game - {category}</h1>
        </div>
    );
};

export default HangmanGame;
