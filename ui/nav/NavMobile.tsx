import Link from 'next/link'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import React from 'react'
import styles from './mobile.module.css'
export const NavMobile = () => {
  return (
    <div className={styles.movil}>
        <header className={styles.header}>
            <Link href={'/'}>
                <h5 className={styles.logo}>Logo</h5>
            </Link>
            <button className={styles.buttonMenu} >menu</button>
        </header>
    </div>
  )
}
