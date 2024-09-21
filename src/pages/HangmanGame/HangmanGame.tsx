import React, { useState, useMemo, useEffect } from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";
import PuzzleBoard from "./PuzzleBoard";

const HangmanGame: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const [health, setHealth] = useState<number>();
    const [answer, setAnswer] = useState<string>("HelloWorld");
    const [correctLetters, setCorrectLetters] = useState<string[]>(["h", "e"]);
    useEffect(() => {
        setHealth(40);
    }, []);
    const handleIconClick = () => {
        console.log("Handle back click heree.....");
    };
    const menuButton = <button className={styles.menuButton} />;
    const headerClasses = cn(styles.header, "mb-12");

    const healthbarComponent = useMemo(() => {
        return (
            <div className={styles.healthbarContainer}>
                <div className={styles.healthbar}>
                    <div
                        className={styles.health}
                        style={{ width: `${health}%` }}
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

            <PuzzleBoard
                answer={answer}
                correctLetters={correctLetters}
                numberOfRows={2}
            />
        </div>
    );
};

export default HangmanGame;
