import React from "react";
import styles from "./PickACategoryPage.module.css";
import Header from "components/Header/Header";
import cn from "classnames";

const PickACategory: React.FC = () => {
    const handleBackClick = () => {
        // Handle back button click
        console.log("Back button clicked");
    };

    const containerClasses = cn(styles.container, "p-12 h-full");
    const headerClasses = cn(styles.header, "mb-12");

    return (
        <div className={containerClasses}>
            <Header
                handleBackClick={handleBackClick}
                className={headerClasses}
                title={"Pick a Category"}
            />
            <div className={styles.buttonContainer}>
                {[
                    "Movies",
                    "TV Shows",
                    "Countries",
                    "Capital Cities",
                    "Animals",
                    "Sports",
                ].map((category) => (
                    <button key={category} className={styles.categoryButton}>
                        {category}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default PickACategory;
