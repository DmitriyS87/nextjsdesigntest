import { SearchProps } from "antd/es/input/Search";
import { Input } from "antd";

import cn from "classnames";
import styles from "./UiSearchInput.module.css";
import Image from "next/image";
import { useState } from "react";

type UiSearchInputProps = SearchProps & { iconPosition?: "left" | "right" };

const SearchIcon = () => (
  <Image width="16" height="16" alt="search icon" src="/icons/searchIcon.svg" />
);

export const UiSearchInput = ({
  iconPosition = "left",
  addonBefore,
  addonAfter,
  ...props
}: UiSearchInputProps) => {
  const [value, setValue] = useState("");
  const isValue = !!value;

  let CompoentBefore = addonBefore;
  let ComponentAfter = addonAfter;

  if (!iconPosition || iconPosition === "left") {
    CompoentBefore = (
      <>
        <SearchIcon />
        {addonBefore}
      </>
    );
  }
  if (iconPosition === "right") {
    ComponentAfter = (
      <>
        {addonAfter}
        <SearchIcon />
      </>
    );
  }

  return (
    <Input
      addonBefore={CompoentBefore}
      addonAfter={ComponentAfter}
      {...props}
      onChange={(v) => setValue(v.target.value)}
      className={cn(styles.search, {
        [String(props?.className)]: !!props.className,
        [styles.left]: iconPosition !== "right",
        [styles.right]: iconPosition === "right",
        [styles.activeShadow]: isValue,
      })}
    />
  );
};
