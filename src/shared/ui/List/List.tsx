'use client'

import { Children, PropsWithChildren } from "react";

import cn from "classnames";
import styles from "./List.module.css";

type ListProps<P extends { id: number | string }> = PropsWithChildren<{
  items: P[];
  ItemComponent: React.FC<P>;
  className?: string;
}>;

export function List<P extends { id: number | string }>({
  items,
  ItemComponent,
  children,
  className,
}: ListProps<P>) {
  return (
    <ul
      className={cn(styles.list, {
        [String(className)]: !!className,
      })}
    >
      {items.map((props) => (
        <li key={props.id} className={styles.listItem}>
          <ItemComponent {...props} />
        </li>
      ))}
      {Children.map(children, (child, index) => (
        <li key={index} className={styles.listItem}>
          {child}
        </li>
      ))}
    </ul>
  );
}
