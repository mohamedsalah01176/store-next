"use client"
import React from 'react'
import { useMediaQuery } from '@mui/material'
import Rating from '@mui/material/Rating';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./card.module.scss"
import Link from 'next/link';

export default function Card({product}) {
// console.log(product)
  return (<> 
    {
        useMediaQuery("(max-width:700px)")?
    <div className={styles.grid2}>
        {product.map((pro)=>{
            return(
                <div key={pro.id} className={`${styles.card} ` } >
                    <img className={`${styles.image2} w-100 `} src={pro.image} alt="" />
                    <div className={styles.title}><div className='fs-3 d-inline-block' >Title:</div>{pro.title}</div>
                    <div className={`${styles.boxprice} text-center  d-flex justify-content-between align-items-center `}>
                        <Rating name="half-rating" defaultValue={pro.rating.rate} precision={0.5} readOnly className='fs-6' />
                        <div className='text-black d-flex align-items-center fs-6 '><div className={`${styles.price}  text-danger`}>{pro.price}</div>US</div>
                    </div>
                    <Link href={`/${pro.id}`} className="btn btn-outline-danger mt-4 w-75 fs-5"><ShoppingCartIcon/> buy </Link>
                </div>
            )
        })}
    </div>
    :
    <div className={styles.grid1}>
        {product.map((pro)=>{
            return(
                <div key={pro.id} className={styles.card } >
                    <img className={`${styles.image1} w-100`} src={pro.image} alt="" />
                    <h1 className={styles.title}><div className='fs-3 d-inline-block' >Title:</div> {pro.title}</h1>
                    <div className={`${styles.boxprice} d-flex justify-content-around align-items-center `}>
                        <Rating name="half-rating" defaultValue={pro.rating.rate} precision={0.5} readOnly />
                        <div className='text-black d-flex align-items-center fs-4 '><div className={`${styles.price} fs-5  text-danger`}>{pro.price}</div>US</div>
                    </div>
                    <Link  href={`/${pro.id}`} className="btn btn-outline-danger mt-4 w-75 fs-5"><ShoppingCartIcon/> buy </Link>
                </div>
            )
        })}
    </div>
    }
  </>
  )
}
