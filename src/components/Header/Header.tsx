import React from "react";
import styles from "./Header.module.css";
import cn from "classnames";

interface HeaderProps {
    className?: string;
    handleIconClick: () => void;
    children?: React.ReactNode;
    backButton?: boolean;
    title: string;
    iconComponent?: React.ReactNode;
}

const Header: React.FC<HeaderProps> = ({
    className,
    backButton = true,
    handleIconClick,
    children,
    title,
    iconComponent,
}) => {
    const headerClasses = cn(styles.header, className);

    return (
        <header className={headerClasses}>
            {backButton && (
                <div className={styles.buttonWrapper} onClick={handleIconClick}>
                    {iconComponent || <button className={styles.backButton} />}
                </div>
            )}
            <h1 className={styles.title}>{title}</h1>
            {children}
        </header>
    );
};

export default Header;
