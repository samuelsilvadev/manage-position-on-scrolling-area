import cx from "classnames";
import styles from "./spacing.module.scss";

export enum SPACING_MARGINS {
  TINY = "tiny",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  BIG = "big",
  HUGE = "huge",
}

export enum SPACING_DIRECTION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export interface SpacingProps {
  size: SPACING_MARGINS;
  direction?: SPACING_DIRECTION;
}

const Spacing = ({
  size = SPACING_MARGINS.MEDIUM,
  direction = SPACING_DIRECTION.HORIZONTAL,
}: SpacingProps) => (
  <div className={cx(styles.spacing, styles[size], styles[direction])} />
);

export default Spacing;
