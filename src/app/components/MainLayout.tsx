'use client'

import { PropsWithChildren } from "react"

import styles from './MainLayout.module.css'
import { MainMenu } from "shared/wigets/MainMenu/MainMenu"
import { Footer } from "shared/wigets/Footer/Footer"

export const MainLayout: React.FC<PropsWithChildren> = ({children}) => {
    return (
        <>
        <div className={styles.header}><MainMenu /></div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}><Footer /></div>
        </>
    )
}