import React, { useState } from "react";
import styles from "./LettersBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";

const LettersBoard: React.FC = () => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    const [chosenLetters, setChosenLetters] = useState<string[]>([]);

    const handleLeterClick = (letter: string) => {
        if (!chosenLetters.includes(letter)) {
            setChosenLetters([...chosenLetters, letter]);
        }
    };

    return (
        <div className={styles.container}>
            {letters.map((letter) => (
                <ButtonCard 
                    key={letter} 
                    className={styles.letterCard}
                    onClick={() => handleLeterClick(letter)}
                    text={letter}
                />
            ))}
        </div>
    );
};

export default LettersBoard;
