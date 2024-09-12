import { PropsWithChildren } from "react";
import styles from "./Paper.module.css";

export const Paper: React.FC<PropsWithChildren> = ({ children }) => (
  <div className={styles.paper}>{children}</div>
);
