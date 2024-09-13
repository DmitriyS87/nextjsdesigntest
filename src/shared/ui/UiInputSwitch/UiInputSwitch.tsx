"use client";

import { Input, InputProps, Switch } from "antd";

import cn from "classnames";
import styles from "./UiInputSwitch.module.css";
import { GroupProps } from "antd/es/input";

type UiInputSwitchProps = InputProps &
  GroupProps & { switchPosition?: "left" | "right" };

export const UiInputSwitch = ({
  switchPosition = "left",
  addonBefore,
  addonAfter,
  ...props
}: UiInputSwitchProps) => {
  let CompoentBefore = addonBefore;
  let ComponentAfter = addonAfter;

  const isSwitchRight = switchPosition === "right";

  const ControlledSwitch = () => (
    <Switch
      size="small"
      className={cn(styles.switch, {
        [styles.ml]: !isSwitchRight,
        [styles.mr]: isSwitchRight,
      })}
      onChange={() => {}}
    />
  );

  if (!switchPosition || switchPosition === "left") {
    CompoentBefore = (
      <>
        <ControlledSwitch />
        {addonBefore}
      </>
    );
  }
  if (switchPosition === "right") {
    ComponentAfter = (
      <>
        {addonAfter}
        <ControlledSwitch />
      </>
    );
  }

  return (
    <Input
      addonBefore={CompoentBefore}
      addonAfter={ComponentAfter}
      {...props}
      type="button"
      className={cn(styles.input, {
        [String(props?.className)]: !!props.className,
        [styles.removePR]: isSwitchRight || addonBefore,
        [styles.removePL]: isSwitchRight || addonAfter,
        [styles.leftIcon]: !!addonBefore,
      })}
    />
  );
};
