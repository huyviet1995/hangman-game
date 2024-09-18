import React from "react";
import styles from "./HangmanGame.module.css";
import { useParams } from "react-router-dom";
import Header from "components/Header/Header";
import cn from "classnames";

const HangmanGame: React.FC = () => {
    const { category } = useParams<{ category: string }>();
    const handleIconClick = () => {
        console.log("Handle back click heree.....");
    }
    const menuButton = <button className={styles.menuButton} />
    const headerClasses = cn(styles.header, "mb-12");
    return (
        <div className={styles.container}>
            <Header 
                handleIconClick={handleIconClick}
                className={headerClasses}
                title={category ?? ""}
                iconComponent={menuButton}
            />
        </div>
    );
};

export default HangmanGame;
