import { UiButton } from "shared/shared/ui/UiButton/UiButton";
import styles from "./AuthPannel.module.css";

export const AuthPannel = () => {
  return (
    <div className={styles.container}>
      <UiButton sizeVariant="small">Вход</UiButton>
      <UiButton sizeVariant="small" type="primary">
        Регистрация
      </UiButton>
    </div>
  );
};
