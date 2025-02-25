import React, { useState, useMemo, useEffect, useCallback } from "react";
import styles from "./HangmanGame.module.css";
import { useNavigate, useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";
import PuzzleBoard from "./PuzzleBoard";
import LettersBoard from "./LettersBoard";
import PopupPortal from "components/PopupPortal/PopupPortal";
import MenuCard from "components/MenuCard/MenuCard";
import Typography from "components/Typography/Typography";
import ButtonCard from "components/ButtonCard/ButtonCard";

interface HangmanGameProps {
    initialHealth?: number;
}

enum GameStatus {
    WIN = "WIN",
    LOSE = "LOSE",
}

type PuzzlesType = {
    [key: string]: string[];
};

const puzzles: PuzzlesType = {
    Movies: ["Inception", "Titanic", "Avatar"],
    TVShows: ["Friends", "Breaking Bad", "Game of Thrones"],
    Countries: ["United States", "Canada", "Australia"],
    CapitalCities: ["Washington DC", "Ottawa", "Canberra"],
    Animals: ["Elephant", "Giraffe", "Kangaroo"],
    Sports: ["Soccer", "Basketball", "Cricket"],
};

const HangmanGame: React.FC<HangmanGameProps> = ({ initialHealth = 3 }) => {
    // Variables
    const navigate = useNavigate();
    // States
    const [hintsLeft, setHintsLeft] = useState<number>(3);
    const { category } = useParams<{ category: string }>();
    const [health, setHealth] = useState<number>(initialHealth);
    const [puzzle, setPuzzle] = useState<string>("");
    const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus | undefined>(
        undefined
    );
    const [isPaused, setIsPaused] = useState<boolean>(false);
    const [showPopup, setShowPopup] = useState(false);

    // Memoized function to generate a random puzzle
    const generateRandomPuzzle = useMemo(() => {
        return () => {
            if (category && puzzles[category]) {
                const randomIndex = Math.floor(
                    Math.random() * puzzles[category].length
                );
                setPuzzle(puzzles[category][randomIndex]);
            }
        };
    }, [category]);

    // Effects
    useEffect(() => {
        generateRandomPuzzle();
        if (category && puzzles[category]) {
            // Reset game state
            setHealth(initialHealth);
            setSelectedLetters([]);
            setCorrectLetters([]);
            setGameStatus(undefined);
        }
    }, [category, initialHealth, generateRandomPuzzle]);

    useEffect(() => {
        const normalizedPuzzle = puzzle.toLowerCase().replace(/\s/g, "");
        const normalizedGuess = correctLetters.join("").toLowerCase();

        const isWin = normalizedPuzzle
            .split("")
            .every((letter) => normalizedGuess.includes(letter));

        if (isWin) {
            setGameStatus(GameStatus.WIN);
        } else if (health === 0) {
            setGameStatus(GameStatus.LOSE);
        }
    }, [puzzle, correctLetters, health]);

    useEffect(() => {
        let timer: NodeJS.Timeout;
        if (gameStatus !== undefined) {
            timer = setTimeout(() => {
                setShowPopup(true);
            }, 1500); // 1.5 seconds delay
            return () => {
                setShowPopup(false);
                return clearTimeout(timer);
            };
        }
    }, [gameStatus]);

    useEffect(() => {
        setShowPopup(false);
        setGameStatus(undefined);
        setCorrectLetters([]);
    }, []);

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
        setGameStatus(undefined);
        setSelectedLetters([]);
        setCorrectLetters([]);
        generateRandomPuzzle();
        setHintsLeft(3);
    };

    const handleResumeGame = () => {
        setIsPaused(false);
    };

    const handlePauseGame = () => {
        setIsPaused(true);
    };

    const handleNewCategory = () => {
        navigate("/choose-category");
        setHintsLeft(3);
    };

    const handleQuitGame = () => {
        navigate("/");
    };

    const handleHint = () => {
        if (hintsLeft <= 0) {
            return;
        }
        const puzzleLetters = puzzle.split("");
        const hintLetter = puzzleLetters.find(
            (letter) => !correctLetters.includes(letter)
        );
        if (hintLetter) {
            handleSelectLetters(hintLetter);
            setCorrectLetters([...correctLetters, hintLetter]);
            setHintsLeft(hintsLeft - 1);
        }
    };

    // Render
    const menuButton = (
        <button className={styles.menuButton} onClick={handlePauseGame} />
    );
    const headerClasses = cn(styles.header, "mb-12");

    const healthbarComponent = useMemo(() => {
        const healthPercentage = Math.floor((health / initialHealth) * 100);

        return (
            <div className={styles.healthbarContainer}>
                <div className={styles.healthbar}>
                    <div
                        className={styles.health}
                        style={{ width: `${healthPercentage}%` }}
                    />
                </div>
                <div className={styles.heartIcon} />
            </div>
        );
    }, [health, initialHealth]);

    console.log("puzzle", puzzle);

    return (
        <div className={styles.container}>
            <Header
                handleIconClick={handleIconClick}
                className={headerClasses}
                title={category ?? ""}
                iconComponent={menuButton}
                titleClassName={styles.title}
            >
                <button
                    className={cn(
                        styles.hintButton,
                        "ms-2",
                        "btn",
                        "btn-secondary"
                    )}
                    onClick={handleHint}
                    disabled={health <= 1 || gameStatus !== undefined}
                >
                    <span
                        className="bi bi-lightbulb me-1"
                        style={{ color: "yellow" }}
                        aria-hidden="true"
                    ></span>
                    <span className="ms-1">{hintsLeft}</span>
                </button>
                {healthbarComponent}
            </Header>

            <PuzzleBoard puzzle={puzzle} correctLetters={correctLetters} />

            <LettersBoard
                selectedLetters={selectedLetters}
                onSelectLetter={handleSelectLetters}
            />
            {(!!gameStatus && showPopup) ||
            (isPaused && gameStatus === undefined) ? (
                <PopupPortal>
                    <MenuCard>
                        <div className={styles.popupContent}>
                            <Typography
                                size={100}
                                lineHeight={100}
                                className={styles.popupTitle}
                            >
                                {gameStatus
                                    ? gameStatus === GameStatus.WIN
                                        ? "YOU WIN"
                                        : "YOU LOSE"
                                    : "Game Paused"}
                            </Typography>
                            <section className={styles.popupButtons}>
                                {gameStatus ? (
                                    <ButtonCard
                                        className={styles.popupButton}
                                        onClick={handlePlayAgain}
                                        text="Play Again"
                                    />
                                ) : (
                                    <ButtonCard
                                        className={styles.popupButton}
                                        onClick={handleResumeGame}
                                        text="Resume Game"
                                    />
                                )}
                                <ButtonCard
                                    className={styles.popupButton}
                                    onClick={handleNewCategory}
                                    text="New Category"
                                />
                                <ButtonCard
                                    className={cn(
                                        styles.popupButton,
                                        styles.quitButton
                                    )}
                                    onClick={handleQuitGame}
                                    text="Quit Game"
                                />
                            </section>
                        </div>
                    </MenuCard>
                </PopupPortal>
            ) : null}
        </div>
    );
};

export default HangmanGame;
