import React, { useState, useMemo } from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";
import PuzzleBoard from "./PuzzleBoard";
import LettersBoard from "./LettersBoard";
import PopupPortal from "components/PopupPortal/PopupPortal";
import MenuCard from "components/MenuCard/MenuCard";

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
        if (!selectedLetters.includes(letter)) {
            setSelectedLetters([...selectedLetters, letter]);
            if (puzzle.toLowerCase().includes(letter.toLowerCase())) {
                setCorrectLetters([...correctLetters, letter]);
            } else {
                setHealth(health - 1);
            }
        }
    };

    const handlePlayAgain = () => {
        setHealth(initialHealth);
        setSelectedLetters([]);
        setCorrectLetters([]); 
        setPuzzle("HelloWorld");
    };

    const handleNewCategory = () => {
        console.log("Handle new category click heree.....");
    };

    const handleQuitGame = () => {
        console.log("Handle quit game click heree.....");
    };


    // Render
    const menuButton = <button className={styles.menuButton} />;
    const headerClasses = cn(styles.header, "mb-12");

    const healthbarComponent = useMemo(() => {
        // Calculate the health percentage
        const healthPercentage = Math.floor((health * 100) / initialHealth);
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
    }, [health, initialHealth]);

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
            {health <= 0 && (
                <PopupPortal>
                    <MenuCard>
                        <div className={styles.popupContent}>
                            <h2>Game Over</h2>
                            <button onClick={handlePlayAgain}>
                                Play Again
                            </button>
                            <button onClick={handleNewCategory}>
                                New Category
                            </button>
                            <button onClick={handleQuitGame}>Quit Game</button>
                        </div>
                    </MenuCard>
                </PopupPortal>
            )}
        </div>
    );
};

export default HangmanGame;
