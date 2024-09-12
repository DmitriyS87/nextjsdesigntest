import Image from "next/image";

import styles from './PriceCell.module.css';
import { Price } from "../ProductTable.types";

export const PriceCell = ({ currency, value, isHot, isPinned }: Price) => (
    <div className={styles.container}>
      <div className={styles.price}>
        <span>{value}</span>
        <span>{currency}</span>
      </div>
      <div className={styles.icons}>
        {isHot && (
          <Image
            width="12"
            height="12"
            alt="icon is hot position"
            src="/icons/lightningIcon.svg"
          />
        )}
        {isPinned && (
          <Image
            width="12"
            height="12"
            alt="icon is hot position"
            src="/icons/pinIcon.svg"
          />
        )}
      </div>
    </div>
  )