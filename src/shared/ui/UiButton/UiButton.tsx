"use client";

import React from "react";
import { ButtonProps } from "antd";
import { Button } from "antd";
import { ButtonGroupProps } from "antd/es/button";

import cn from "classnames";
import styles from "./UiButton.module.css";
const cx = cn.bind(styles);

type ANTDButtonProps = ButtonProps &
  React.RefAttributes<HTMLButtonElement | HTMLAnchorElement> &
  ButtonGroupProps & { sizeVariant?: string };

export const UiButton: React.FC<ANTDButtonProps> = ({
  children,
  sizeVariant = "default",
  ...props
}) => (
  <Button
    {...props}
    className={cx(styles.button, {
      [String(props?.className)]: !!props?.className,
      [styles.default]: !props.type || props.type === "default",
      [styles.sizeDefault]: sizeVariant === "default",
      [styles.sizeSmall]: sizeVariant === "small",
      [styles[String(props.type)]]: !!props.type,
    })}
    autoInsertSpace={false}
  >
    {children}
  </Button>
);
