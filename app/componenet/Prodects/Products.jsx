
import React, { cache } from 'react'
import styles from "./products.module.scss"
import { useMediaQuery } from '@mui/material'
import Card from '../card/Card'


export default async function Products() {
    const res =await fetch("https://fakestoreapi.com/products",{next:{revalidate:120}})
    const product=await res.json()
    // console.log(product)
  return (
  <div className='pt-4'>

    <Card product={product}  />
  </div>
  
     

    
  )
}
