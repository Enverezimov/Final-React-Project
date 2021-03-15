import React from 'react'
import ProductImg from './ProductImg'
import css from './Product.module.css'
import ProductInfo from './ProductInfo'

const Product = ({setCount,product}) => {
    return (
        <div className={css.Gridproduct}>
            <ProductImg product={product} />
            <ProductInfo product={product} setCount={setCount} />
        </div>
    )
}

export default Product