import Image from "next/image";
import { Vendor } from "../ProductTable.types";

import styles from "./VendorCell.module.css";
import { RatingCard } from "shared/entities/RatingCard/RatingCard";

export const VendorCell = ({ avatar, description, name, rating }: Vendor) => (
  <div className={styles.container}>
    <div className={styles.avatar}>
      <Image width="28" height="28" alt="avatar image" src={avatar} />
    </div>
    <div className={styles.info}>
      <div className={styles.name}>
        <div>{name}</div>
        <RatingCard value={rating} />
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  </div>
);
