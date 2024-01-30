"use client"

import Link from 'next/link'
import React from 'react'
import styles from "./Navbar.module.scss"

export default function Navbar() {
  return (
    <div className={`${styles.nav} p-2`}>

      <div className='container d-flex justify-content-between align-items-center '>
          <Link href={"/"} className={`${styles.logo} fs-1`}>MS</Link>
          <div className="links">
              <Link  className={`${styles.a} `}href={"/"}>Home</Link>
              <Link className={`${styles.a} mx-3`}href={"/card"}>Card</Link>
              <Link className={`${styles.a}`}href={"/about"}>About Us</Link>
          </div>
          
      </div>
    </div>
  )
}
