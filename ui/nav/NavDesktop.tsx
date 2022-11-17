import Link from 'next/link'
import React from 'react'
import styles from './desktop.module.css'
import { MenuPrimary } from './MenuPrimary'
import { MenuSecondaryMini } from './MenuSecondaryMini'
import { MenuSecondaryFull } from './MenuSecondaryFull'
export const NavDesktop = () => {
  return (
    <div className={styles.desktop}>
        <div className={styles.logo}><Link href={'/'} >Logo</Link></div>
        <MenuPrimary />
        <MenuSecondaryMini />
        <MenuSecondaryFull />
    </div>
  )
}
