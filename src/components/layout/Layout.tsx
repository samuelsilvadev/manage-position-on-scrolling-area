import { FC } from "react";
import styles from "./layout.module.scss";

const Layout: FC = ({ children }) => (
  <div className={styles.wrapper}>{children}</div>
);

export default Layout;
