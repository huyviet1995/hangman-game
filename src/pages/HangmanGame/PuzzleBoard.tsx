import React, { useEffect, useState } from "react";
import styles from "./PuzzleBoard.module.css";
import ButtonCard from "components/ButtonCard/ButtonCard";

interface PuzzleBoardProps {
    answer: string;
    correctLetters: string[];
    numberOfRows: number;
}

const PuzzleBoard: React.FC<PuzzleBoardProps> = ({
    answer,
    correctLetters,
    numberOfRows,
}) => {
    // States
    const [rows, setRows] = useState<string[]>([]);

    // Effect
    useEffect(() => {
        // Calculate the number of letters per row
        const baseLettersPerRow = Math.floor(answer.length / numberOfRows);
        // Calculate the number of extra letters that need to be distributed
        const extraLetters = answer.length % numberOfRows;

        const tempRows = [];
        let startIndex = 0;

        for (let i = 0; i < numberOfRows; i++) {
            // Calculate the number of letters for the current row
            const lettersInRow = baseLettersPerRow + (extraLetters > 0 && i >= extraLetters ? 1 : 0);
            tempRows.push(answer.slice(startIndex, startIndex + lettersInRow));
            startIndex += lettersInRow;
        }

        setRows(tempRows);
    }, [numberOfRows, answer]);

    // Handlers
    const onButtonClick = () => {
        console.log("onButtonClick");
    };

    return (
        <div className={styles.puzzleBoard}>
            {rows.map((row, rowIndex) => (
                <div key={rowIndex} className={styles.row}>
                    {row.split("").map((char, index) => (
                        <ButtonCard
                            key={`${rowIndex}-${index}`}
                            className={styles.letter}
                            onClick={onButtonClick}
                            text={correctLetters.includes(char) ? char : ""}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
};

export default PuzzleBoard;
