import React from 'react'
import styles from './Header.module.css'
import Logo from '../assets/logo.svg'




export const Header = () => {
  return (
    <div className={styles.header}>

       <div className={styles.feed}>
            <img src={Logo} alt="logo ignite" />
            <h2> Ignite feed</h2>
        </div> 






    </div>
  )
}
