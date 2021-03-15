import React from 'react'
import css from './Product.module.css'

const ProductImg = ({product}) => {

    return (
        <div className={css.productPhoto}>
            <img className={css.img} src={product.img} />
        </div>
    )
}

export default ProductImg
