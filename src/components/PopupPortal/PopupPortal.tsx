import React from "react";
import ReactDOM from "react-dom";
import styles from "./PopupPortal.module.css";

interface PopupPortalProps {
    children: React.ReactNode;
}

const PopupPortal: React.FC<PopupPortalProps> = ({ children }) => {
    const portalRoot = document.getElementById("root");
    if (!portalRoot) return null;

    return ReactDOM.createPortal(
        <div className={styles.popupOverlay}>
            {children}
        </div>,
        portalRoot
    );
};

export default PopupPortal;