import React, { FunctionComponent, HTMLAttributes, useState } from "react";
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
  const [open, setOpen] = useState(false);

  const handleChange = (
    e: React.MouseEvent<HTMLElement>,
    action: (e: React.MouseEvent<HTMLElement>) => void
  ) => {
    e.stopPropagation();
    action(e);
    setOpen(false);
  };

  return (
    <div className={styles.action}>
      <button
        className={styles.icon}
        onClick={(e: React.MouseEvent<HTMLElement>) => {
          e.stopPropagation();
          setOpen(!open);
        }}
      >
        ⠇
      </button>
      <ul
        className={cx(styles.dropDown, {
          [styles.show]: open,
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
