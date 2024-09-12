import Image from 'next/image';

import styles from './RatingCard.module.css';

interface RatingCardProps {
    value: number;
}

export const RatingCard = ({value}: RatingCardProps) => {
    return (
        <div className={styles.card}>
            <span>{value}</span>
            <Image width="12" height="12" alt="star icon" src="/icons/starIcon.svg" />
        </div>
    )
}