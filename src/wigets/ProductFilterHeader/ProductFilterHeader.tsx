'use client'

import { UiTag } from "shared/shared/ui/UiTag/UiTag";
import styles from "./ProductFilterHeader.module.css";
import { List } from "shared/shared/ui/List/List";
import { PropsWithChildren } from "react";

const productCategoriesMock = [
  { id: 1, name: "Робуксы", count: 395 },
  { id: 2, name: "Подарочные карты", count: 1193 },
  { id: 3, name: "Донат робуксов (паки)", count: 777 },
  { id: 4, name: "Premium", count: 1193 },
  { id: 5, name: "VIP-сервер", count: 395 },
  { id: 6, name: "Аккаунты", count: 1193 },
  { id: 7, name: "Скины", count: 777 },
  { id: 8, name: "Prime Gaming", count: 395 },
  { id: 9, name: "Studio", count: 1193 },
  { id: 10, name: "Прочее", count: 395 },
  { id: 11, name: "Adopt Me", count: 1193 },
  { id: 12, name: "Anime Defenders", count: 777 },
  { id: 13, name: "Arm Wrestle Simulator", count: 1193 },
  { id: 14, name: "ASTD", count: 395 },
  { id: 15, name: "Blade Ball", count: 1193 },
  { id: 16, name: "Blox Fruits", count: 777, isActive: true },
  { id: 17, name: "Da Hood", count: 395 },
  { id: 18, name: "GPO", count: 1193 },
  { id: 19, name: "Jailbreak", count: 777 },
  { id: 20, name: "Jujutsu Shenanigans", count: 395 },
  { id: 21, name: "King Legacy", count: 1193 },
  { id: 22, name: "MM2", count: 777 },
  { id: 23, name: "Pet Simulator 99", count: 1193 },
  { id: 24, name: "Pet Simulator X", count: 395 },
  { id: 25, name: "Project Slayers", count: 1193 },
  { id: 26, name: "Toilet Tower Defense", count: 777 },
  { id: 27, name: "Tower Defense Simulator", count: 395 },
  { id: 28, name: "YBA", count: 1193 },
  { id: 29, name: "Прочие игры", count: 777 },
];

type ProductTagProps =
  | { id: number; name: string; count: number; isActive?: undefined }
  | { id: number; name: string; count: number; isActive: boolean };

const ProductTag: React.FC<PropsWithChildren<ProductTagProps>> = ({
  isActive = false,
  name,
  count,
}) => {
  return (
    <UiTag checked={isActive}>
      <span className={styles.tagName}>{name}</span>
      {count ? <span className={styles.tagCount}>{count}</span> : null}
    </UiTag>
  );
};

export const ProductFilterHeader = () => {
  return (
    <div className={styles.container}>
      <div className={styles.component}>
        <div className={styles.header}>Робуксы Roblox</div>
        <div className={styles.info}>
          Какой-то длинный текст, связанный с SEO-оптимизацией относительно
          данной категории, на которую вы сейчас смотрите. Какой-то длинный
          текст, связанный с SEO-оптимизацией относительно данной категории, на
          которую вы сейчас смотрите.
        </div>
        <List items={productCategoriesMock} ItemComponent={ProductTag} />
      </div>
    </div>
  );
};
