import Image from 'next/image';
import styles from './SocialMediaIcons.module.css';

const socialMediaIcons = [
    {
        id: 1,
        name: 'telegram',
        iconUrl: '/icons/tgIcon.svg'
    },
    {
        id: 2,
        name: 'telegram',
        iconUrl: '/icons/discordIcon.svg'
    },
    {
        id: 3,
        name: 'telegram',
        iconUrl: '/icons/vkIcon.svg'
    },
    {
        id: 4,
        name: 'telegram',
        iconUrl: '/icons/youTubeIcon.svg'
    },
]

export const SocialMediaIcons = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.list}>
                {socialMediaIcons.map(({id, name, iconUrl}) => (
                    <li key={id}><Image height={44} width={44} alt={name} src={iconUrl} /></li>
                ))}
                
            </ul>
        </div>
    )
}