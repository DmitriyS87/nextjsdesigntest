import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";
import Column from "antd/es/table/Column";
import { DataType } from "./ProductTable.types";
import { VendorCell } from "./components/VendorCell";
import { PriceCell } from "./components/PriceCell";
import { EmojiString } from "./components/EmojiString";

import cn from "classnames";
import styles from "./ProductTable.module.css";

const amountParser = (val: DataType["amount"]) => {
  if (val === "∞") {
    return Infinity;
  }
  if (val === "-∞") {
    return -Infinity;
  }
  return Number(val);
};

const data: DataType[] = [
  {
    key: "1",
    name: "🤑🔥🕘Аренда Вип Сервера | 24 часа🕒🔥🤑, VIP-сервер",
    amount: 322,
    price: {
      value: 0.64,
      currency: "₽",
      isHot: true,
      isPinned: true,
    },
    vendor: {
      avatar: "/icons/personOnlineIcon.svg",
      id: 1947682,
      description: "3 года на сайте, 4288 отзывов",
      name: "0xHearts.com",
      rating: 4.9,
    },
  },
  {
    key: "2",
    name: "❤ФРУКТ СПИРИТ, СПИРИТ, БЛОКС ФРУКТ, SPIRIT💛💢, Предметы, Трейд",
    amount: "∞",
    price: {
      value: 0.63,
      currency: "₽",
      isHot: true,
      isPinned: true,
    },
    vendor: {
      avatar: "/images/userIghorOnline_2x.png",
      id: 1947682,
      description: "1 год на сайте, 45 отзывов",
      name: "IgorDun4enkoff",
      rating: 2.0,
    },
  },
  {
    key: "3",
    name: "🤲Куплю и пройду рейд БУДДЫ - БУДДА РЕЙД - БУДА - место будды - Рейды буды - BUDDHA RAID - 🤲, Услуги",
    amount: "4556",
    price: {
      value: 0.6,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userDandyOffline_2x.png",
      id: 111110,
      description: "2 дня на сайте, 4 отзыва",
      name: "Dendi",
      rating: 5.0,
    },
  },
  {
    key: "4",
    name: "🍩 / Рейд Теста - Куплю и пройду рейд Теста - РЕЙДЫ ТЕСТА - МЕСТО ТЕСТА - ДОУЧ - 🍩, Услуги",
    amount: "15666",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 444440,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 1.0,
    },
  },
  {
    key: "5",
    name: "💛Фрукт Будда 💛 🟡Buddha Fruit🟡, Предметы, Трейд",
    amount: "104242",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 555550,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.0,
    },
  },
  {
    key: "6",
    name: "🧠spirit fruit | Спирит | фрукт Спирит🧠, Предметы, Трейд",
    amount: 322,
    price: {
      value: 0.64,
      currency: "₽",
      isHot: true,
      isPinned: true,
    },
    vendor: {
      avatar: "/icons/personOnlineIcon.svg",
      id: 666660,
      description: "3 года на сайте, 4288 отзывов",
      name: "0xHearts.com",
      rating: 4.9,
    },
  },
  {
    key: "7",
    name: "🟦Rumble Fruit🟦Фрукт Грохот, Предметы, Трейд",
    amount: "∞",
    price: {
      value: 0.63,
      currency: "₽",
      isHot: true,
      isPinned: true,
    },
    vendor: {
      avatar: "/images/userIghorOnline_2x.png",
      id: 1947682,
      description: "1 год на сайте, 45 отзывов",
      name: "IgorDun4enkoff",
      rating: 2.1,
    },
  },
  {
    key: "8",
    name: "🐘 Фрукт Мамонта 🐘 Мамонт/Mammoth 🐘, Предметы, Трейд",
    amount: "1502410",
    price: {
      value: 0.6,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userDandyOffline_2x.png",
      id: 888880,
      description: "2 дня на сайте, 4 отзыва",
      name: "Dendi",
      rating: 4.9,
    },
  },
  {
    key: "9",
    name: "🔑 🔪  Заспавню и убью катакури в1 / Получение бледного шарфа / бледный шарф  🔪 🔑, Услуги",
    amount: "15666",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 444440,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.6,
    },
  },
  {
    key: "10",
    name: "👾Призову / Убью(если надо) рип индру / активирую все плиты / Rip_indra / rip_indra / выбью чашу👾, Услуги",
    amount: "15666",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 555550,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.6,
    },
  },
  {
    key: "11",
    name: "🔑👑 Заспавню и убью катакури в2 / Получение рейда теста / миррор фрактал / зеркальный фрактал /👑🔑, Услуги",
    amount: "∞",
    price: {
      value: 0.63,
      currency: "₽",
      isHot: true,
      isPinned: true,
    },
    vendor: {
      avatar: "/images/userIghorOnline_2x.png",
      id: 1947682,
      description: "1 год на сайте, 45 отзывов",
      name: "IgorDun4enkoff",
      rating: 2.1,
    },
  },
  {
    key: "12",
    name: "⚔️ КУПЛЮ И ПРОЙДУ ЛО - БОСС ЛО - ЛО - РЕЙД ЛО - ЧИП ЛО - БУСТ - RAID LO - LO - ⚔️, Услуги",
    amount: "15666",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 555550,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.6,
    },
  },
  {
    key: "13",
    name: "Вандо, Услуги",
    amount: "1502410",
    price: {
      value: 0.6,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userDandyOffline_2x.png",
      id: 8181810,
      description: "2 дня на сайте, 4 отзыва",
      name: "Dendi",
      rating: 4.9,
    },
  },
  {
    key: "14",
    name: "✨🍀Прокачка LvL цена за 1 уровень🍀✨, Услуги",
    amount: "15666",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 555550,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.6,
    },
  },
  {
    key: "15",
    name: "💝Набор 3 в 1 Покупка Легендарных мечей 💝 wando / shisui / saddi / ТТК / TTK / Вандо / Шисуи/ Садди, Услуги",
    amount: "104242",
    price: {
      value: 0.55,
      currency: "₽",
    },
    vendor: {
      avatar: "/images/userQewbieOnline_2x.png",
      id: 555550,
      description: "5 лет на сайте, 200 отзывов",
      name: "qewbie",
      rating: 3.6,
    },
  },
];

const printAmount = (value: string) => {
  if (value.length < 4) {
    return value;
  }
  return new Intl.NumberFormat().format(Number(value)).replace(/,/g, " ");
};

const onChange: TableProps<DataType>["onChange"] = (
  pagination,
  filters,
  sorter,
  extra,
) => {
  console.log("params", pagination, filters, sorter, extra);
};

export const ProductTable: React.FC = () => (
  <Table
    dataSource={data}
    onChange={onChange}
    className={styles.table}
    pagination={false}
  >
    <Column
      title="Описание"
      dataIndex="name"
      key="name"
      render={(data) => (
        <div className={styles.tableCellContent}>
          <EmojiString className={styles.name} data={data} />
        </div>
      )}
    />
    <Column
      width={230}
      title="Продавец"
      dataIndex="vendor"
      key="vendor"
      render={(data) => (
        <div className={styles.tableCellContent}>
          <VendorCell {...data} />
        </div>
      )}
    />
    <Column
      width={128}
      title="Наличие"
      align="right"
      dataIndex="amount"
      key="amount"
      sorter={{
        compare: (a, b) => amountParser(a.amount) - amountParser(b.amount),
        multiple: 1,
      }}
      render={(data) => (
        <div
          className={cn(styles.tableCellContent, styles.right, styles.amount)}
        >
          {printAmount(data)}
        </div>
      )}
    />
    <Column
      width={128}
      title="Цена"
      align="right"
      dataIndex="price"
      key="price"
      render={(data) => (
        <div className={cn(styles.tableCellContent, styles.right)}>
          <PriceCell {...data} />
        </div>
      )}
      sorter={{
        compare: (a, b) => a.price.value - b.price.value,
        multiple: 2,
      }}
    />
  </Table>
);
