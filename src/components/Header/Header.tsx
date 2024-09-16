import React from "react";
import styles from "./Header.module.css";
import cn from "classnames";

interface HeaderProps {
    className?: string;
    handleBackClick: () => void;
    children?: React.ReactNode;
    backButton?: boolean;
    title: string;
}

const Header: React.FC<HeaderProps> = ({
    className,
    backButton = true,
    handleBackClick,
    children,
    title,
}) => {
    const headerClasses = cn(styles.header, className);

    return (
        <header className={headerClasses}>
            {backButton && (
                <div className={styles.buttonWrapper} onClick={handleBackClick}>
                    <button className={styles.backButton} />
                </div>
            )}
            <h1 className={styles.title}>{title}</h1>
            {children}
        </header>
    );
};

export default Header;
