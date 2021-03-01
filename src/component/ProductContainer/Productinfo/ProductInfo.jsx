import React from 'react'
import css from './Product.module.css'

const ProductInfo = (props) => {
    console.log(props.product);
    return (
        <div className={css.productInfo}>
            <h1 className={css.title}>{props.product.nameproduct}</h1>
            <p className={css.price}>${props.product.price}</p>
            <p className={css.text}>{props.product.titlle2}</p>
            <button className={css.add}><i className='fas fa-shopping-basket'></i>Add To Cart</button>
            <div className={css.sortingTitle}>
                <p className={css.tags}>tags:</p>
                <h1 className={css.sort}>{props.product.tags}</h1>
            </div>
        </div>
    )
}
export default ProductInfo
