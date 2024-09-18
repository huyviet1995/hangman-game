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
        const lettersPerRow = Math.ceil(answer.length / numberOfRows);
        const tempRows = [];
        for (let i = 0; i < numberOfRows; i++) {
            tempRows.push(
                answer.slice(i * lettersPerRow, (i + 1) * lettersPerRow)
            );
        }
        setRows(tempRows);
    }, [numberOfRows, answer]);

    console.log({ rows });

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
