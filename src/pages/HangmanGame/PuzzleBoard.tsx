import React, { useCallback } from "react";
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

    const isCorrect = useCallback((char: string) => {
        return correctLetters.some(letter => letter.toLowerCase() === char.toLowerCase());
    }, [correctLetters]);

    return (
        <div className={styles.puzzleBoard}>
            {puzzle.split("").map((char, index) => (
                <ButtonCard
                    key={index}
                    className={styles.letter}
                    onClick={onButtonClick}
                    isPlaceholder={!isCorrect(char)}
                    text={isCorrect(char) ? char : " "}
                />
            ))}
        </div>
    );
};

export default PuzzleBoard;
