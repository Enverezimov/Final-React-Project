import React from 'react'
import ProductImg from './ProductImg'
import css from './Product.module.css'
import ProductInfo from './ProductInfo'

const Product = (props) => {
    return (
        <div className={css.Gridproduct}>
            <ProductImg product={props.product} />
            <ProductInfo product={props.product} />
        </div>
    )
}

export default Product