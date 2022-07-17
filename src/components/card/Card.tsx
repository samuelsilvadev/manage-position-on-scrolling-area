import React, { ReactNode } from "react";
import cx from "classnames";
import styles from "./card.module.scss";

export enum CARD_HEIGHT {
  SMALL = "heightSmall",
  MEDIUM = "heightMedium",
  LARGE = "heightLarge",
  CONTENT = "heightContent",
  FULL = "heightFull",
}

export enum CARD_WIDTH {
  SMALL = "widthSmall",
  MEDIUM = "widthMedium",
  LARGE = "widthLarge",
  EXTRALARGE = "widthLarge",
  CONTENT = "widthContent",
  FULL = "widthFull",
}

export interface CardProps {
  children: ReactNode;
  height?: CARD_HEIGHT;
  width?: CARD_WIDTH;
  withShadow?: boolean;
  className?: string;
  overflowVisible?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  height = CARD_HEIGHT.CONTENT,
  width = CARD_WIDTH.CONTENT,
  withShadow = false,
  overflowVisible,
  className,
}: CardProps) => (
  <div
    className={cx(
      styles.card,
      styles[height],
      styles[width],
      {
        [styles.withShadow]: withShadow,
        [styles.overflowVisible]: overflowVisible,
      },
      className
    )}
  >
    {children}
  </div>
);

export default Card;
