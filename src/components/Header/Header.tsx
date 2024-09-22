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
    titleClassName?: string;
}

const Header: React.FC<HeaderProps> = ({
    className,
    backButton = true,
    handleIconClick,
    children,
    title,
    iconComponent,
    titleClassName
}) => {
    // Render
    const renderBackButton = () => {
        if (!backButton) return null;
        
        return (
            <div className={styles.buttonWrapper} onClick={handleIconClick}>
                {iconComponent || <button className={styles.backButton} />}
            </div>
        );
    };

    const headerClasses = cn(styles.header, className);
    const titleClasses = cn(styles.title, titleClassName);

    return (
        <header className={headerClasses}>
            {renderBackButton()}
            <h1 className={titleClasses}>{title}</h1>
            {children}
        </header>
    );
};

export default Header;

