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

    const categories: { [key: string]: string } = {
        "Movies": "Movies",
        "TV Shows": "TVShows",
        "Countries": "Countries",
        "Capital Cities": "CapitalCities",
        "Animals": "Animals",
        "Sports": "Sports",
    };

    const handlePickCategory = (category: string): void => {
        const categoryValue = categories[category];
        navigate(`/game/${categoryValue}`);
    }

    return (
        <div className={containerClasses}>
            <Header
                handleIconClick={handleIconClick}
                className={headerClasses}
                title={"Pick a Category"}
            />
            <div className={styles.buttonContainer}>
                {Object.entries(categories).map(([categoryName, categoryValue]) => (
                    <ButtonCard
                        onClick={() => handlePickCategory(categoryName)}
                        key={categoryValue}
                        text={categoryName}
                        className={styles.card}
                    />
                ))}
            </div>
        </div>
    );
};

export default PickACategory;
