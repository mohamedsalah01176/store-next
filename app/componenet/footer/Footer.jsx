
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';

import styles from "./footer.module.scss"
export default function Footer() {
  return (
    <div className={`${styles.footer} p-4 d-flex justify-content-around align-items-center` } >
      <div className="text">
        Made by <span>Mohamed Salah</span>in 2024
      </div>
      <div className="icons">
        <FacebookIcon/>
        <WhatsAppIcon/>
        <InstagramIcon/>
      </div>
    </div>
  )
}
