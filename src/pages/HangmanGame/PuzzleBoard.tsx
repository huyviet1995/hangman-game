import React from "react";
import styles from "./PuzzleBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";

interface PuzzleBoardProps {
    answer: string;
    correctLetters: string[];
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
    answer,
    correctLetters,
}) => {
    // States
    // Handlers
    const onButtonClick = () => {
        console.log("onButtonClick");
    };

    return (
        <div className={styles.puzzleBoard}>
            {answer.split("").map((char, index) => (
                <ButtonCard
                    key={index}
                    className={styles.letter}
                    onClick={onButtonClick}
                    text={correctLetters.includes(char) ? char : ""}
                />
            ))}
        </div>
    );
};

export default PuzzleBoard;
