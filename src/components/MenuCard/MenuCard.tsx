import React from "react";
import styles from "./MenuCard.module.css";
// import { ReactComponent as PlayButton } from "./icon-play.svg";
// import { ReactComponent as PlayButtonBackground } from "./play-button-background.svg";
// import Typography from "components/Typography/Typography";
import { useNavigate } from "react-router-dom";

interface MenuCardProps {
    children?: React.ReactNode; 
}

const MenuCard: React.FC<MenuCardProps> = ({ children }) => {
    const navigate = useNavigate();
    return (
        <div className={styles.container}>
            {children}
        </div>
    );
};

export default MenuCard;
