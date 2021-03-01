import React from 'react'
import css from './Product.module.css'

const ProductImg = (props) => {
    console.log('a',props.product);
    return (
        <div className={css.productPhoto}>
            <img className={css.img} src={props.product.img} />
        </div>
    )
}

export default ProductImg
