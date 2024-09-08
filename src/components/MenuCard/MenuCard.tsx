import React from "react";
import styles from "./MenuCard.module.css";
import { ReactComponent as HangmanTitle } from "./hangman-title.svg";
import { ReactComponent as PlayButton } from "./icon-play.svg";
import { ReactComponent as PlayButtonBackground } from "./play-button-background.svg";

const MenuCard: React.FC = () => {
    return (
        <div className={styles.container}>
            <HangmanTitle className={styles.title} />
            <button className={styles.playButtonContainer}>
                <PlayButtonBackground className={styles.playButtonBackground} />
                <PlayButton className={styles.iconPlay} />
            </button>
            <button className={styles.howToPlayButton}>How to Play</button>
        </div>
    );
};

export default MenuCard;
