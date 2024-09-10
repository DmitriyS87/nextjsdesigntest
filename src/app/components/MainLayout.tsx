// use client

import { PropsWithChildren } from "react"

import styles from './MainLayout.module.css'

export const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
        <div className={styles.header}>Header</div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>Footer</div>
        </>
    )
}