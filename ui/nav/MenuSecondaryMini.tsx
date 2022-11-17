import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import styles from './secondary.module.css'
export const MenuSecondaryMini = () => {
  return (
    <div className={styles.mini}>
        <button className={styles.buttonMenu}>menu</button>
    </div>
  )
}
