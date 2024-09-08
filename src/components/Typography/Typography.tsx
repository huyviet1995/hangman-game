import React from "react";
import styles from "./Typography.module.css";

interface TypographyProps {
    size: number;
    children: React.ReactNode;
    className?: String;
    uppercase?: boolean;
    stroke?: number;
    lineHeight: number;
}

const Typography: React.FC<TypographyProps> = ({
    size,
    children,
    className,
    uppercase,
    stroke,
    lineHeight
}) => {
    const classnames = [styles.typography, className].join(" ");
    return (
        <div
            className={classnames}
            style={{
                fontSize: `${size}px`,
                textTransform: uppercase ? "uppercase" : "none",
                WebkitTextStrokeWidth: `${stroke}px`,
                WebkitTextStrokeColor: stroke ? "black" : undefined,
                lineHeight: lineHeight ? `${lineHeight}px` : undefined,
            }}
        >
            {children}
        </div>
    );
};

export default Typography;
