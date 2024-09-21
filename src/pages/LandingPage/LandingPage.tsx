import React from "react";
import styles from "./LandingPage.module.css";
import MenuCard from "components/MenuCard/MenuCard";
import Typography from "components/Typography/Typography";
import { ReactComponent as PlayButton } from "./icon-play.svg";
import { ReactComponent as PlayButtonBackground } from "./play-button-background.svg";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
	const navigate = useNavigate();
    const handleHowToPlayButton = () => {
        navigate('/tutorial');
    }
    return (
        <div className={styles.landingContainer}>
            <MenuCard>
                <div className={styles.title}>
                    <Typography
                        size={40}
                        uppercase
                        stroke={1}
                        lineHeight={35}
                        className={styles.textLeft}
                    >
                        {"The"}
                    </Typography>
                    <Typography size={100} stroke={2} lineHeight={100}>
                        {"Hangman"}
                    </Typography>
                    <Typography
                        size={40}
                        uppercase
                        stroke={1}
                        lineHeight={35}
                        className={styles.textRight}
                    >
                        {"Game"}
                    </Typography>
                </div>
                <button
                    className={styles.playButtonContainer}
                    onClick={() => navigate("/choose-category")}
                >
                    <PlayButtonBackground
                        className={styles.playButtonBackground}
                    />
                    <PlayButton className={styles.iconPlay} />
                </button>
                <button
                    className={styles.howToPlayButton}
                    onClick={handleHowToPlayButton}
                >
                    How to Play
                </button>
            </MenuCard>
        </div>
    );
};

export default LandingPage;
