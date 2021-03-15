import React, { useState } from 'react'
import ButtonsActive from '../../ButtonsActive/ButtonsActive';
import css from './Product.module.css'

const ProductInfo = ({product,setCount}) => {
    return (
        <div className={css.productInfo}>
            <h1 className={css.title}>{product.nameproduct}</h1>
            <p className={css.price}>${product.price}</p>
            <p className={css.text}>{product.titlle2}</p>
            {!!product.count && <ButtonsActive count={product.count} setCount={(type) => setCount(product, type)}/>}
            {!product.count && <button  onClick={()=>setCount(product,'increment')} className={css.add} ><i className='fas fa-shopping-basket'></i>Add To Cart</button>}
            

            <div className={css.sortingTitle}>
                <p className={css.tags}>tags:</p>
                <h1 className={css.sort}>{product.tags}</h1>
            </div>
        </div>
    )
}
export default ProductInfo
