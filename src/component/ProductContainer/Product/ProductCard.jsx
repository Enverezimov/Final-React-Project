import React, { useState } from 'react'
import Buttons from '../../Buttons/Buttons'
import ButtonsActive from '../../ButtonsActive/ButtonsActive'
import css from './ProductInfoCard.module.css'


const ProductCard = ({count,setCount,price,title,img}) => {
    
    return (
        <div className={css.card}>
            <img className={css.img} src={img} alt="" />
            <h6 className={css.price} >{price}</h6>
            <p className={css.title} >{title}</p>
            
            {!!count && <ButtonsActive count={count} setCount={setCount}/>}
            {!count && <Buttons setCount={setCount}/>}
            
           {/*  */}
        </div>
    )

}

export default ProductCard
