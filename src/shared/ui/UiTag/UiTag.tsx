"use client";

import React from "react";
import { Tag } from "antd";
import { CheckableTagProps } from "antd/es/tag";

import cn from "classnames";
import styles from "./UiTag.module.css";

const { CheckableTag } = Tag;

const cx = cn.bind(styles);

export const UiTag: React.FC<
  CheckableTagProps & React.RefAttributes<HTMLSpanElement>
> = ({ children, ...props }) => {
  return (
    <CheckableTag
      {...props}
      className={cx(styles.tag, {
        [styles.checked]: props.checked,
      })}
    >
      {children}
    </CheckableTag>
  );
};
