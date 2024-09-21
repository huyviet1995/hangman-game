import React from "react";
import styles from "./LettersBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";
import cn from "classnames";

interface LettersBoardProps {
    selectedLetters: string[];
    onSelectLetter: (letter: string) => void;
}

const LettersBoard: React.FC<LettersBoardProps> = ({
    onSelectLetter,
    selectedLetters,
}) => {
    const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

    return (
        <div className={styles.container}>
            {letters.map((letter) => {
                const isSelected = selectedLetters.some(
                    (selectedLetter) =>
                        selectedLetter.toLowerCase() === letter.toLowerCase()
                )
                const buttonClasses = cn(styles.letterCard, {
                    [styles.selected]: isSelected,
                });
                const onClick = () => { 
                    if (isSelected) {
                        return;
                    }
                    onSelectLetter(letter);
                }
                return (
                    <ButtonCard
                        key={letter}
                        className={buttonClasses}
                        onClick={onClick}
                        text={letter}
                    />
                );
            })}
        </div>
    );
};

export default LettersBoard;
