import React, { useState } from "react";
import styles from "./LettersBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";

interface LettersBoardProps {
    selectedLetters: string[];
    onSelectLetter: (letter: string) => void;
}

const LettersBoard: React.FC<LettersBoardProps> = ({ onSelectLetter, selectedLetters }) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className={styles.container}>
            {letters.map((letter) => (
                <ButtonCard 
                    key={letter} 
                    className={styles.letterCard}
                    onClick={() => onSelectLetter(letter)}
                    text={letter}
                />
            ))}
        </div>
    );
};

export default LettersBoard;
