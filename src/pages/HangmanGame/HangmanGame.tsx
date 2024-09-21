import React, { useState, useMemo, useEffect } from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";
import PuzzleBoard from "./PuzzleBoard";
import LettersBoard from "./LettersBoard";

interface HangmanGameProps {
    initialHealth?: number;
}

const HangmanGame: React.FC<HangmanGameProps> = ({ initialHealth = 3 }) => {
    // States
    const { category } = useParams<{ category: string }>();
    const [health, setHealth] = useState<number>(initialHealth);
    const [puzzle, setPuzzle] = useState<string>("HelloWorld");
    const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);

    // Handlers
    const handleIconClick = () => {
        console.log("Handle back click heree.....");
    };

    const handleSelectLetters = (letter: string) => {
        console.log({ letter, selectedLetters });
        if (!selectedLetters.includes(letter)) {
            setSelectedLetters([...selectedLetters, letter]);
            if (puzzle.toLowerCase().includes(letter.toLowerCase())) {
                setCorrectLetters([...correctLetters, letter]);
            } else {
                setHealth(health - 1);
            }
        }
    };

    // Render
    const menuButton = <button className={styles.menuButton} />;
    const headerClasses = cn(styles.header, "mb-12");

    const healthbarComponent = useMemo(() => {
        // Calculate the health percentage
        const healthPercentage = Math.floor(health * 100 / initialHealth);
        console.log({ healthPercentage, health, initialHealth });
        return (
            <div className={styles.healthbarContainer}>
                <div className={styles.healthbar}>
                    <div
                        className={styles.health}
                        style={{ width: `${healthPercentage}%` }}
                    ></div>
                </div>
                <div className={styles.heartIcon}></div>
            </div>
        );
    }, [health]);

    return (
        <div className={styles.container}>
            <Header
                handleIconClick={handleIconClick}
                className={headerClasses}
                title={category ?? ""}
                iconComponent={menuButton}
                titleClassName={styles.title}
            >
                {healthbarComponent}
            </Header>

            <PuzzleBoard puzzle={puzzle} correctLetters={correctLetters} />

            <LettersBoard
                selectedLetters={selectedLetters}
                onSelectLetter={handleSelectLetters}
            />
        </div>
    );
};

export default HangmanGame;
