import Link from 'next/link'
import React from 'react'
import {NavMobile} from './nav/NavMobile'
import {NavDesktop} from './nav/NavDesktop'
import styles from './navbar.module.css'
export const Navbar = () => {
  return (
    <nav className={styles.navbar} id='navbar'>
        <NavMobile />
        <NavDesktop />
    </nav>
  )
}
