import Link from 'next/link'
import React from 'react'
import styles from './logo.module.css'

export const Logo = () => {
  return (
    <div className={styles.logo}>
        <Link href={'/'}>
            <h6>ecommerce</h6>
        </Link>
    </div>
  )
}
