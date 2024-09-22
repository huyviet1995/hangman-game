import React, { useState, useMemo, useEffect } from "react";
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
    const { category } = useParams<{ category: string }>();
    const [health, setHealth] = useState<number>(initialHealth);
    const [puzzle, setPuzzle] = useState<string>("");
    const [selectedLetters, setSelectedLetters] = useState<string[]>([]);
    const [correctLetters, setCorrectLetters] = useState<string[]>([]);
    const [gameStatus, setGameStatus] = useState<GameStatus | undefined>(
        undefined
    );
    const [isPaused, setIsPaused] = useState<boolean>(false);

    // Effects
    useEffect(() => {
        if (category && puzzles[category]) {
            const categoryPuzzles = puzzles[category];
            const randomPuzzle =
                categoryPuzzles[
                    Math.floor(Math.random() * categoryPuzzles.length)
                ];
            setPuzzle(randomPuzzle);
        }
    }, [category]);

    useEffect(() => {
        const correctLettersToLowercase = correctLetters.map((letter) =>
            letter.toLowerCase()
        );
        if (health <= 0) {
            setGameStatus(GameStatus.LOSE);
        } else if (
            puzzle &&
            puzzle
                ?.split("")
                ?.every((letter) =>
                    correctLettersToLowercase.includes(letter.toLowerCase())
                )
        ) {
            setGameStatus(GameStatus.WIN);
        }
    }, [health, puzzle, correctLetters]);

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
        setPuzzle("HelloWorld");
    };

    const handleResumeGame = () => {
        setIsPaused(false);
    }

    const handlePauseGame = () => {
        setIsPaused(true);
    }

    const handleNewCategory = () => {
        // Move user to the category selection page
        navigate("/choose-category");
    };

    const handleQuitGame = () => {
        // Navigate user back to the home page
        navigate("/");
    };

    // Render
    const menuButton = <button className={styles.menuButton} onClick={handlePauseGame} />;
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
            {!!gameStatus && (
                <PopupPortal>
                    <MenuCard>
                        <div className={styles.popupContent}>
                            <Typography
                                size={100}
                                lineHeight={100}
                                className={styles.popupTitle}
                            >
                                {gameStatus === GameStatus.WIN
                                    ? "YOU WIN"
                                    : "YOU LOSE"}
                            </Typography>
                            <section className={styles.popupButtons}>
                                <ButtonCard
                                    className={styles.popupButton}
                                    onClick={handlePlayAgain}
                                    text="Play Again"
                                />
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
            )}
            {isPaused && (
                <PopupPortal>
                    <MenuCard>
                        <div className={styles.popupContent}>
                            <Typography
                                size={100}
                                lineHeight={100}
                                className={styles.popupTitle}
                            >
                                Game Paused
                            </Typography>
                            <section className={styles.popupButtons}>
                                <ButtonCard
                                    className={styles.popupButton}
                                    onClick={handleResumeGame}
                                    text="Resume Game"
                                />
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
            )}
        </div>
    );
};

export default HangmanGame;
