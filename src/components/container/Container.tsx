import { forwardRef, ReactNode } from "react";
import cx from "classnames";
import styles from "./container.module.scss";

export interface ContainerProps {
  children: ReactNode;
  padding?: string;
  direction?: string;
  fullWidth?: boolean;
  scrollWidth?: boolean;
  fullHeight?: boolean;
  alignCenter?: boolean;
  alignItemsCenter?: boolean;
  alignLeft?: boolean;
  alignRight?: boolean;
  verticalCenter?: boolean;
  verticalTop?: boolean;
  verticalBottom?: boolean;
  spreadContent?: boolean;
  fullScreen?: boolean;
  showOverflow?: boolean;
  overFlowVisible?: boolean;
  initialPosition?: boolean;
  scrollable?: boolean;
  margin?: string;
  marginLeftAuto?: boolean;
  border?: CONTAINER_BORDER;
  className?: string;
}

export enum CONTAINER_PADDING {
  NONE = "none",
  MICRO = "micro",
  TINY = "tiny",
  SMALL = "small",
  MEDIUM = "medium",
  LARGE = "large",
  BIG = "big",
  HUGE = "huge",
  LATERAL_MEDIUM = "lateralMedium",
  LATERAL_LARGE = "lateralLarge",
}

export enum CONTAINER_MARGIN {
  NONE = "no-margin",
  NEGATIVE = "negative",
  TINY = "tiny-margin",
}

export enum CONTAINER_DIRECTION {
  HORIZONTAL = "horizontal",
  VERTICAL = "vertical",
}

export enum CONTAINER_BORDER {
  BOTTOM = "borderBottom",
  TOP = "borderTop",
  NONE = "none",
}

const Container = forwardRef<HTMLDivElement, ContainerProps>(
  (
    {
      children,
      padding = CONTAINER_PADDING.MEDIUM,
      margin = CONTAINER_MARGIN.NONE,
      direction = CONTAINER_DIRECTION.HORIZONTAL,
      fullWidth = false,
      scrollWidth = false,
      fullHeight = false,
      alignLeft = false,
      alignRight = false,
      alignCenter = false,
      alignItemsCenter = false,
      verticalCenter = false,
      verticalTop = false,
      verticalBottom = false,
      spreadContent = false,
      fullScreen = false,
      showOverflow = false,
      overFlowVisible = false,
      initialPosition = false,
      scrollable = false,
      marginLeftAuto = false,
      border = CONTAINER_BORDER.NONE,
      className,
    },
    ref
  ) => (
    <div
      ref={ref}
      className={cx(
        styles.container,
        styles[padding],
        styles[direction],
        styles[border],
        styles[margin],
        className,
        {
          [styles.fullWidth]: fullWidth,
          [styles.scrollWidth]: scrollWidth,
          [styles.fullHeight]: fullHeight,
          [styles.alignCenter]: alignCenter,
          [styles.alignItemsCenter]: alignItemsCenter,
          [styles.alignLeft]: alignLeft,
          [styles.alignRight]: alignRight,
          [styles.verticalTop]: verticalTop,
          [styles.verticalBottom]: verticalBottom,
          [styles.verticalCenter]: verticalCenter,
          [styles.spreadContent]: spreadContent,
          [styles.fullScreen]: fullScreen,
          [styles.showOverflow]: showOverflow,
          [styles.scrollable]: scrollable,
          [styles.overFlowVisible]: overFlowVisible,
          [styles.initialPosition]: initialPosition,
          [styles.marginLeftAuto]: marginLeftAuto,
        }
      )}
    >
      {children}
    </div>
  )
);

export default Container;
