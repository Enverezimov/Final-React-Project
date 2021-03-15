import React from 'react'
import css from './MiniBasket.module.css'

const MiniBasket = ({price,onClick,items}) => {
    return (
        <div onClick={onClick}>
            <button className={css.basket}>
                <div className={css.basketNav}>
                <i className={`fas fa-shopping-basket ${css.icon}`}></i>
                <span className={css.shtuk}>{items.reduce((a,b) => a + b.count,0)}</span>
                <span className={css.item}>item</span>
                </div>
                <div >
                    <h1 className={css.price}>${price}</h1>
                </div>
            </button>
        </div>
    )

}

export default MiniBasket
