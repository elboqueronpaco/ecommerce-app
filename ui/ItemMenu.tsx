import Link from 'next/link'
import React from 'react'
import { FC } from 'react'
import styles from './link.module.css'
interface Props {
    label: string
    url: string
}
export const ItemMenu: FC<Props> = ({label, url}) => {
  return (
    <li><Link href={url} className={styles.linkMenu}>{label}</Link></li>
  )
}
