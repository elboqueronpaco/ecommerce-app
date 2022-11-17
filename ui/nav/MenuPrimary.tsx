import Link from 'next/link'
import React from 'react'
import { linksDesktop } from './data/linksDesktop'
import styles from './primary.module.css'
export const MenuPrimary = () => {
  return (
    <nav  className={styles.primary}>
        {
            linksDesktop.map(({label, url} )=> (
                <Link key={url} href={url} className={styles.link}>{label}</Link>
            ))
        }
    </nav>
  )
}
