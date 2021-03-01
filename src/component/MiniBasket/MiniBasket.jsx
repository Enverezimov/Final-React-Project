import React from 'react'
import css from './MiniBasket.module.css'

const MiniBasket = () => {

    return (
        <div >
            <button className={css.basket}>
                <div className={css.basketNav}>
                <i className={`fas fa-shopping-basket ${css.icon}`}></i>
                <span className={css.shtuk}>0</span>
                <span className={css.item}>item</span>
                </div>
                <div >
                    <h1 className={css.price}>$0.00</h1>
                </div>
            </button>
        </div>
    )

}

export default MiniBasket
