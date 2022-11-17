import React from 'react'
import { ItemMenu } from './ItemMenu'
import styles from './menu.module.css'
const links = [
    {
        label: 'Hombres',
        url: '/products/men'
    },
    {
        label: 'Mujeres',
        url: '/products/women'
    },
    {
        label: 'Niños',
        url: '/products/kits'
    }
]
export const Menu = () => {
  return (
    <ul className={styles.menu}>
        {
            links.map(({label, url}) => (
                <ItemMenu key={url} url={url} label={label} />
            ))
        }
    </ul>
  )
}
