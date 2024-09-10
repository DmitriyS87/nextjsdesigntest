import Image from "next/image";
import styles from "./page.module.css";
import { MainLayout } from "./components/MainLayout";
import { Button } from "antd";

const productCategories = [
  { name: "Робуксы", count: 395 },
  { name: "Подарочные карты", count: 1193 },
  { name: "Донат робуксов (паки)", count: 777 },
  { name: "Premium", count: 1193 },
  { name: "VIP-сервер", count: 395 },
  { name: "Аккаунты", count: 1193 },
  { name: "Скины", count: 777 },
  { name: "Prime Gaming", count: 395 },
  { name: "Studio", count: 1193 },
  { name: "Прочее", count: 395 },
  { name: "Adopt Me", count: 1193 },
  { name: "Anime Defenders", count: 777 },
  { name: "Arm Wrestle Simulator", count: 1193 },
  { name: "ASTD", count: 395 },
  { name: "Blade Ball", count: 1193 },
  { name: "Blox Fruits", count: 777, isActive: true },
  { name: "Da Hood", count: 395 },
  { name: "GPO", count: 1193 },
  { name: "Jailbreak", count: 777 },
  { name: "Jujutsu Shenanigans", count: 395 },
  { name: "King Legacy", count: 1193 },
  { name: "MM2", count: 777 },
  { name: "Pet Simulator 99", count: 1193 },
  { name: "Pet Simulator X", count: 395 },
  { name: "Project Slayers", count: 1193 },
  { name: "Toilet Tower Defense", count: 777 },
  { name: "Tower Defense Simulator", count: 395 },
  { name: "YBA", count: 1193 },
  { name: "Прочие игры", count: 777 },
];

const tableTabs = [
  { name: "Все", count: null, isActive: true },
  { name: "Бели" },
  { name: "Аккаунты" },
  { name: "Предметы" },
  { name: "VIP-сервер" },
  { name: "Услуги" },
  { name: "Гайды" },
];

export default function Home() {
  return (
    <MainLayout>
      <div className={styles.paper}>
        <div className={styles.componentUpper}>
          <div className={styles.header}>Робуксы Roblox</div>
          <div className={styles.info}>
            Какой-то длинный текст, связанный с SEO-оптимизацией относительно
            данной категории, на которую вы сейчас смотрите. Какой-то длинный
            текст, связанный с SEO-оптимизацией относительно данной категории,
            на которую вы сейчас смотрите.
          </div>
          <ul className={styles.list}>
            {productCategories.map(({ name, count, isActive = false }) => (
              <li className={styles.listItem}>
                <div
                  className={`${
                    isActive
                      ? styles.tab + " " + styles.tab__active
                      : styles.tab
                  }`}
                >
                  <div className={styles.tabName}>{name}</div>
                  {count ? (
                    <div className={styles.tabCount}>{count}</div>
                  ) : null}
                </div>
              </li>
            ))}
          </ul>
          <Image
            width="450"
            height="450"
            className={styles.legoImage}
            src="/icon.png"
            alt="funny toy pic"
          />
        </div>
        <div className={styles.componentTableContainer}>
          <div className={styles.tableControls}>
            <div className={styles.left}>
              <ul className={styles.list}>
                {tableTabs.map(({ name, count = null, isActive = false }) => (
                  <li className={styles.listItem}>
                    <div
                      className={`${
                        isActive
                          ? styles.tab + " " + styles.tab__active
                          : styles.tab
                      }`}
                    >
                      <div className={styles.tabName}>{name}</div>
                      {count ? (
                        <div className={styles.tabCount}>{count}</div>
                      ) : null}
                    </div>
                  </li>
                ))}
                <li className={styles.listItem}>selector</li>
                <li className={styles.listItem}>checkbox</li>
                <li className={styles.listItem}>checkbox icon</li>
                <li className={styles.listItem}>search filter</li>
              </ul>
            </div>
            <div className={styles.right}>
              <Button type="primary">Продать Blox Fruits</Button>
            </div>
          </div>
          <div>Table</div>
          <div>Показать больше предложений</div>
        </div>
        <section className={styles.componentNotes}>
          <p>
            Робуксы — это валюта платформы мини игр Roblox, обеспечивающая
            комфортный геймплей и расширенные возможности для игрока. Что
            естественно притягивает толпы желающих их приобрести. Сделать это
            безопасно и без переплат лучше всего на проверенной площадке,
            которой и является биржа игровых ценностей FunPay. Мы обеспечиваем
            комфортные условия для торговли робуксами Roblox без посредников,
            поэтому на нашей торговой площадке всегда присутствует: Безопасность
            сделок. Они проходят в три этапа: оплата, получение игровой валюты,
            подтверждение выполнения заказа. Реальный рыночный курс робуксов.
            Формируется в условиях естественной конкуренции между продавцами.
            Быстрое оформление заказов. Всего за несколько кликов, с оплатой
            любым удобным для вас способом. Если же у вас возникнут вопросы, то
            служба поддержки FunPay ответит на них в любое время суток!
          </p>
          <p>
            Как купить Покупка робуксов осуществляется просто, как мы писали
            выше, нужно сделать всего три действия: Выбрать предложение, кликнув
            на него, и находясь на странице оформления заказа, связаться с
            продавцом. Оплатить заказ на нужное количество робуксов. Получить
            игровую валюту RBX и подтвердить выполнение заказа. После можно
            оставить отзыв продавцу и оценить его работу. Продавец получит ваши
            деньги только после того, как вы получите робуксы в Roblox и
            отправите системе подтверждение о выполнении заказа.
          </p>
          <p>
            Продавцам Если вы опытный продавец или начинаете свой путь с нуля —
            неважно, у вас есть замечательная возможность продать робуксы через
            FunPay. Чтобы стать продавцом нашей биржи, следуйте следующим
            принципам: Выставляйте на продажу только ту сумму, что есть у вас в
            наличии, чтобы вы смогли быстро передать игровую валюту клиенту.
            Вежливо отвечайте на вопросы потенциальных покупателей. Ответственно
            относитесь к своим обязанностям и выполняйте заказы в кратчайшие
            сроки. Покупатель должен получить столько робуксов, сколько он
            указал в заказе. И помните, чем больше у вас довольных клиентов, тем
            выше шанс превратить своё хобби в отличный источник дохода.
            Присоединяйтесь к FunPay!
          </p>
        </section>
      </div>
    </MainLayout>
  );
}
