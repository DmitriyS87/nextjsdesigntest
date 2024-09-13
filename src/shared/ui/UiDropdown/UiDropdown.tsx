import React, { useState } from "react";
import type { DropdownProps, MenuProps } from "antd";
import { Dropdown } from "antd";
import { DropdownButtonProps } from "antd/es/dropdown";
import { UiButton } from "../UiButton/UiButton";
import Image from "next/image";

import cn from "classnames";
import styles from "./UiDropdown.module.css";

const cx = cn.bind(styles);

type Props = {
  placeholder?: string;
  variant?: "link" | "button";
} & DropdownButtonProps &
  DropdownProps;

const itemsMock: MenuProps["items"] = [
  {
    key: "1",
    label: "Пункт меню",
  },
  {
    key: "2",
    label: "Пункт меню",
  },
  {
    key: "3",
    label: "Пункт меню",
  },
  {
    key: "4",
    label: "Пункт меню",
  },
];

const getLinkArrowImg = (flag: boolean) =>
  flag ? (
    <Image width="16" height="16" src="/icons/arrowUpIcon.svg" alt="icon" />
  ) : (
    <Image width="16" height="16" src="/icons/arrowDownIcon.svg" alt="icon" />
  );
const getBtnArrowImg = (flag: boolean) =>
  flag ? (
    <Image width="16" height="16" src="/icons/arrowUpIconGray.svg" alt="icon" />
  ) : (
    <Image width="16" height="16" src="/icons/arrowDownIcon.svg" alt="icon" />
  );

export const UiDropdown: React.FC<Props> = ({
  placeholder = "Поддержка",
  children,
  variant,
  className,
  ...props
}) => {
  const [open, setOpen] = useState(false);

  const handleOpenChange: DropdownProps["onOpenChange"] = (open) => {
    setOpen(open);
  };
  return (
    <Dropdown
      {...props}
      menu={{
        ...props.menu,
        items: props?.menu?.items ?? itemsMock,
        selectable: true,
        defaultSelectedKeys: ["3"],
        className: styles.dropdown,
      }}
      className={cx(className)}
      open={open}
      onOpenChange={handleOpenChange}
    >
      {variant === "link" ? (
        <a
          className={cn(styles.trigger, {
            [styles.active]: open,
          })}
        >
          <>
            {placeholder}
            {getLinkArrowImg(open)}
          </>
        </a>
      ) : variant === "button" ? (
        <UiButton
          sizeVariant="small"
          style={{ gap: "9px" }}
          className={cn(styles.dropdownOpen, {
            [styles.active]: open,
          })}
        >
          {placeholder}
          {getBtnArrowImg(open)}
        </UiButton>
      ) : (
        <>{children}</>
      )}
    </Dropdown>
  );
};
