import React, { useState } from 'react'
import ProductInfoCard from './Product/ProductInfoCard'
import Product from './Productinfo/Product'
import css from './ProductContainer.module.css'
import Basket from '../Basket/Basket'
import MiniBasket from '../MiniBasket/MiniBasket'
import { useParams } from 'react-router'

const ProductContainer = ({ count, data }) => {

  let { id } = useParams();
  const product = data.find(el=> el.id == id)

  return (
    <div className={css.ProductCont}>
      <Product setCount={count} product={product} />
      <ProductInfoCard data={data} setCount={count} />
    </div>
  )

}

export default ProductContainer

