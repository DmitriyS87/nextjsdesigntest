"use client";

import { UiDropdown } from "shared/shared/ui/UiDropdown/UiDropdown";
import { List } from "shared/shared/ui/List/List";
import { UiTag } from "shared/shared/ui/UiTag/UiTag";
import { PropsWithChildren } from "react";
import { ProductTable } from "shared/features/ProductTable/ProductTable";
import { UiButton } from "shared/shared/ui/UiButton/UiButton";
import { UiSearchInput } from "shared/shared/ui/UiSearchInput/UiSearchInput";
import { UiInputSwitch } from "shared/shared/ui/UiInputSwitch/UiInputSwitch";
import Image from "next/image";

import styles from "./WigetProductTable.module.css";

const tableTabs = [
  { id: 1, name: "Все", isActive: true },
  { id: 2, name: "Бели" },
  { id: 3, name: "Аккаунты" },
  { id: 4, name: "Предметы" },
  { id: 5, name: "VIP-сервер" },
  { id: 6, name: "Услуги" },
  { id: 7, name: "Гайды" },
];

type ProductTagProps =
  | { id: number; name: string; isActive?: undefined }
  | { id: number; name: string; isActive: boolean };

const ProductTag: React.FC<PropsWithChildren<ProductTagProps>> = ({
  isActive = false,
  name,
}) => {
  return (
    <UiTag
      checked={isActive}
      style={{ height: "36px", letterSpacing: "0.14px" }}
    >
      <span className={styles.tabName}>{name}</span>
    </UiTag>
  );
};

export const WigetProductTable = () => {
  return (
    <div className={styles.componentTableContainer}>
      <div className={styles.tableControls}>
        <div className={styles.left}>
          <List
            items={tableTabs}
            ItemComponent={ProductTag}
            className={styles.list}
          >
            <UiDropdown placeholder="Способ доставки" variant="button" />
            <UiInputSwitch
              switchPosition="right"
              value="Только продавцы онлайн"
            />
            <UiInputSwitch
              switchPosition="right"
              value="Моментальная доставка"
              addonBefore={
                <Image
                  width={12}
                  height={12}
                  alt="lightning icon"
                  src="/icons/lightningIcon.svg"
                  style={{ marginLeft: "7px" }}
                />
              }
            />
            <UiSearchInput
              style={{ width: "315px" }}
              iconPosition="right"
              placeholder="Поиск по описанию лота..."
            />
          </List>
        </div>
        <div className={styles.right}>
          {/* стили кнопки не соответствуют дизайн гайдам, размер большой, а текст как на маленькой. Вопрос к дизайнеру */}
          <UiButton
            type="primary"
            style={{ fontSize: "14px", lineHeight: "20px", height: "36px" }}
          >
            Продать Blox Fruits
          </UiButton>
        </div>
      </div>
      <div>
        <ProductTable />
        <div className={styles.showMore}>
          <UiButton block>Показать больше предложений</UiButton>
        </div>
      </div>
    </div>
  );
};
