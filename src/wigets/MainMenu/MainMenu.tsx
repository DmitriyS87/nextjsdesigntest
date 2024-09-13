'use client'

import { Logo } from "shared/entities/Logo/Logo";
import styles from "./MainMenu.module.css";
import { UiSearchInput } from "shared/shared/ui/UiSearchInput/UiSearchInput";
import { SupportDropdown } from "shared/features/Support/SupportDropdown/SupportDropdown";
import { LangDropdown } from "shared/features/Multilang/LangDropdown/LangDropdown";
import { CurrencyDropdown } from "shared/features/Payment/CurrencyDropdown/CurrencyDropdown";
import { AuthPannel } from "shared/features/Auth/AuthPannel/AuthPannel";

export const MainMenu = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <Logo />
        <UiSearchInput placeholder="Поиск игр и приложений..." />
      </div>
      <div className={styles.right}>
        <div className={styles.selectable}>
          <SupportDropdown />
          <LangDropdown />
          <CurrencyDropdown />
        </div>
        <AuthPannel />
      </div>
    </div>
  );
};
