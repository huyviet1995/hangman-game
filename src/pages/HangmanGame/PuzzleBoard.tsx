import React from "react";
import styles from "./PuzzleBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";

interface PuzzleBoardProps {
    puzzle: string;
    correctLetters: string[];
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
    puzzle,
    correctLetters,
}) => {
    // States
    // Handlers
    const onButtonClick = () => {
        console.log("onButtonClick");
    };

    return (
        <div className={styles.puzzleBoard}>
            {puzzle.split("").map((char, index) => (
                <ButtonCard
                    key={index}
                    className={styles.letter}
                    onClick={onButtonClick}
                    isPlaceholder={!correctLetters.includes(char)}
                    text={correctLetters.includes(char) ? char : ""}
                />
            ))}
        </div>
    );
};

export default PuzzleBoard;
