'use client'

import { Logo } from "shared/entities/Logo/Logo";

import cn from "classnames";
import styles from "./Footer.module.css";
import { SocialMediaIcons } from "shared/entities/SocialMediaIcons/SocialMediaIcons";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.left}>
        <div className={styles.block}>
          <Logo />
          <p>© 2024 STARVELL, лучший маркетплейс цифровых товаров и услуг</p>
          <p>Дизайн сделан в 0xHearts.com</p>
        </div>
        <div className={cn(styles.block, styles.blockMenu)}>
          <h4 className={styles.title}>Поддержка</h4>
          <ul className={styles.list}>
            <li className={styles.listItem}>
              <a>Написать в поддержку</a>
            </li>
            <li className={styles.listItem}>
              <a>Политика конфиденциальности</a>
            </li>
            <li className={styles.listItem}>
              <a>Пользовательское соглашение</a>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.right}>
        <SocialMediaIcons />
      </div>
    </div>
  );
};
