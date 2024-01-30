"use client"
import React, { useEffect, useState } from 'react'
import { Rating, useMediaQuery } from '@mui/material';
import Link from 'next/link';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import styles from "./details.module.scss";

export default function Detailscard({params}) {
  const[details,setdetails]=useState("")
  useEffect(()=>{
     fetch(`https://fakestoreapi.com/products/${params.detailscard}`)
      .then(response => response.json())
      .then(data => setdetails(data))

      
  },[])
    console.log(details)
   
  return (
    <>
    {
      useMediaQuery("(max-width:700px)")?
      <div className={styles.contaioner}>
      <div className={`${styles.card2 }`}>
          <div className={` ${styles.image12} `}>
            <img className={` ${styles.image}  `}  src={details.image} alt="" />
          </div>
          <div className={styles.text}>
            <div className='fs-5 text-danger m-1'>{details.title}</div>
            <div className={`${styles.des} fs-5`}>description:</div>
            <div  className={`${styles.des22}`}> {details.description}</div>
            <div className={`  d-flex justify-content-around align-items-center m-3  `}>
                      {/* <Rating name="half-rating" defaultValue={details.rating.rate} precision={0.5} readOnly className='fs-4' /> */}
                      <div className='text-black d-flex align-items-center fs-6 '><div className={` text-danger`}>{details.price}</div>US</div>
            </div>
            <Link href={`/`} className="btn btn-outline-danger mb-1 w-50 fs-6 "><ShoppingCartIcon/> buy </Link>

          </div>
        </div>
   </div>
   :
   <div className={styles.contaioner}>
        <div className={`${styles.card} d-flex`}>
            <div className={` ${styles.image1} `}>
              <img className={` ${styles.image}  `}  src={details.image} alt="" />
            </div>
            <div className='text'>
              <div className='fs-4 text-danger m-3'>{details.title}</div>
              <div className={`${styles.des} fs-4`}>description:</div>
              <div  className={`${styles.des2}`}> {details.description}</div>
              <div className={`  d-flex justify-content-around align-items-center m-3  `}>
                        {/* <Rating name="half-rating" defaultValue={details.rating.rate} precision={0.5} readOnly className='fs-4' /> */}
                        <div className='text-black d-flex align-items-center fs-4 '><div className={` text-danger`}>{details.price}</div>US</div>
              </div>
              <Link href={`/`} className="btn btn-outline-danger mb-2 w-50 fs-5 "><ShoppingCartIcon/> buy </Link>

            </div>
          </div>
     </div>
    }
    </>
     
    
  )
}
