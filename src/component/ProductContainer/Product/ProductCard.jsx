import React from 'react'
import css from './ProductInfoCard.module.css'


const ProductCard = (props) => {

    return (
        <div className={css.card}>
            <img className={css.img} src={props.img} alt="" />
            <h6 className={css.price} >{props.price}</h6>
            <p className={css.title} >{props.title}</p>
            <button className={css.btn} >a</button>
        </div>
    )

}

export default ProductCard
