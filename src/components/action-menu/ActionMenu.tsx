import React, {
  HTMLAttributes,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from "react";
import cx from "classnames";
import styles from "./actionMenu.module.scss";

export interface ActionItem {
  action: (e: React.MouseEvent<HTMLElement>) => void;
  label: string;
}

export interface DropdownMenuProps extends HTMLAttributes<HTMLSelectElement> {
  extraHeight: number;
  boundaryHeight: number;
  items: ActionItem[];
}

enum Position {
  TOP = "top",
  BOTTOM = "bottom",
}

const ActionMenu = ({
  items,
  extraHeight,
  boundaryHeight,
}: DropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const [dropDownPosition, setDropDownPosition] = useState(Position.TOP);

  useEffect(() => {
    const handleOnClickOutsideOfActionMenu = (event: MouseEvent) => {
      const safeTarget = event.target as HTMLElement;
      const isClickOutsideOfActionMenu = !ref.current?.contains(safeTarget);

      if (isClickOutsideOfActionMenu) {
        setIsOpen(false);
      }
    };

    document.addEventListener("click", handleOnClickOutsideOfActionMenu);

    return () => {
      document.removeEventListener("click", handleOnClickOutsideOfActionMenu);
    };
  }, []);

  useEffect(() => {
    const handleOnCloseOnEscapePress = (event: KeyboardEvent) => {
      const hasEscapeBeenPressed = event.key === "Escape";

      if (hasEscapeBeenPressed) {
        setIsOpen(false);
      }
    };

    document.addEventListener("keydown", handleOnCloseOnEscapePress);

    return () => {
      document.removeEventListener("keydown", handleOnCloseOnEscapePress);
    };
  }, []);

  useLayoutEffect(() => {
    if (isOpen && ref.current && listRef.current) {
      const scrolledTop = ref.current.offsetParent?.scrollTop ?? 0;
      const offsetTopFromVisibleArea =
        ref.current.offsetTop - scrolledTop - extraHeight;
      const listHeight = listRef.current.offsetHeight;

      const listFinalPositionFromVisibleArea =
        offsetTopFromVisibleArea + listHeight;

      const isOutsideOfBottomBoundary =
        listFinalPositionFromVisibleArea > boundaryHeight;

      if (isOutsideOfBottomBoundary) {
        setDropDownPosition(Position.BOTTOM);
      }
    }
  }, [isOpen, extraHeight, boundaryHeight]);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    action: (e: React.MouseEvent<HTMLElement>) => void
  ) => {
    action(e);
    setIsOpen(false);
  };

  const handleOnToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className={styles.action} ref={ref}>
      <button className={styles.icon} onClick={handleOnToggle}>
        ⠇
      </button>
      <ul
        ref={listRef}
        className={cx(styles.dropDown, styles[dropDownPosition], {
          [styles.show]: isOpen,
        })}
      >
        {items.map((item: ActionItem) => (
          <li
            key={`${item.label}`}
            onClick={(e) => handleChange(e, item.action)}
          >
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ActionMenu;
