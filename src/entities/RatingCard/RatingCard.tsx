import cn from "classnames";
import styles from "./RatingCard.module.css";
import { StarIcon } from "shared/shared/ui/icons/StarIcon";

const cx = cn.bind(styles);

interface RatingCardProps {
  value: number;
}

export const RatingCard = ({ value }: RatingCardProps) => {
  const printValue = value.toFixed(1);

  return (
    <div
      className={cx(styles.card, {
        [styles.red]: value > 0,
        [styles.orange]: value > 3,
        [styles.yellow]: value > 4,
        [styles.green]: value === 5,
      })}
    >
      <span>{printValue}</span>
      <StarIcon />
    </div>
  );
};
