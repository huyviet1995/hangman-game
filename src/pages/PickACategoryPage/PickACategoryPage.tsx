import React from "react";
import styles from "./PickACategoryPage.module.css";
import Header from "components/Header/Header";
import cn from "classnames";
import ButtonCard from "components/ButtonCard/ButtonCard";
import { useNavigate } from "react-router-dom";

const PickACategory: React.FC = () => {

    const navigate = useNavigate();

    const handleIconClick = () => {
        navigate("/");
    };

    const containerClasses = cn(styles.container, "p-12 h-full");
    const headerClasses = cn(styles.header, "mb-12");

    const categories = [
        "Movies",
        "TV Shows",
        "Countries",
        "Capital Cities",
        "Animals",
        "Sports",
    ]

    const handlePickCategory = (category: string): void => {
        navigate(`/game/${category}`);
    }

    return (
        <div className={containerClasses}>
            <Header
                handleIconClick={handleIconClick}
                className={headerClasses}
                title={"Pick a Category"}
            />
            <div className={styles.buttonContainer}>
                {categories.map((category) => (
                    <ButtonCard
                        onClick={() => handlePickCategory(category)}
                        key={category}
                        text={category}
                    />
                ))}
            </div>
        </div>
    );
};

export default PickACategory;
