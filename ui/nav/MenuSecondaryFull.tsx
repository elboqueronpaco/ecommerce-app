import React from 'react'
import styles from './secondary.module.css'
import stylesLink from './desktop.module.css'
import {linksSecondary} from './data/linkSecondary'
import Link from 'next/link'

export const MenuSecondaryFull = () => {
  return (
    <div className={styles.full}>
      {
        linksSecondary.map(({label, url}) => (
          <Link key={url} href={url} className={stylesLink.link}>{label}</Link>
        ))
      }
    </div>
  )
}
