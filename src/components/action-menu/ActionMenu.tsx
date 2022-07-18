import React, {
  FunctionComponent,
  HTMLAttributes,
  useEffect,
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
  items: ActionItem[];
}

const ActionMenu: FunctionComponent<DropdownMenuProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

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
        className={cx(styles.dropDown, {
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
