import Image from "next/image";
import styles from "./page.module.css";
import { MainLayout } from "./components/MainLayout";
import { Paper } from "shared/shared/ui/Paper/Paper";
import { ProductFilterHeader } from "shared/wigets/ProductFilterHeader/ProductFilterHeader";
import { WigetProductTable } from "shared/wigets/WigetProductTable/WigetProductTable";
import { TradingInfo } from "shared/entities/TradingInfo/TradingInfo";

export default function Home() {
  return (
    <MainLayout>
      <Paper>
        <ProductFilterHeader />
        <Image
          width="418"
          height="414"
          className={styles.legoImage}
          src="/images/legoToy.png"
          alt="funny toy pic"
        />
        <WigetProductTable />
        <TradingInfo />
      </Paper>
    </MainLayout>
  );
}
