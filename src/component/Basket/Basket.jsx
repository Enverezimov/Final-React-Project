import React, { useState } from 'react'
import MiniBasket from '../MiniBasket/MiniBasket';
import css from "./Basket.module.css";
import BasketCard from './BasketCard';
import BasketShopIcon from './BasketShopIcon';

const Basket = ({ items, onClose, setCount, onReset }) => {
    
    return (
        <div className={css.Sebet}>
            <div className={css.basket}>
                <div className={css.basketNav}>
                    <i className={`fas fa-shopping-basket ${css.icon}`}></i>
                    <p className={css.item}>{items.reduce((a,b) => a + b.count,0)}item</p>
                    <i onClick={onClose} className={`fas fa-times ${css.icons}`}></i>
                </div>
                <hr className={css.hr} />
                {items.length == 0 && <BasketShopIcon />}
                {items.length > 0 && <BasketCard onReset={onReset} items={items} setCount={setCount}/>}

                <h1 className={css.voucher}>Do you have a voucher?</h1>
                <div className={css.BasketBottom}>
                    <h1 className={css.Checkout}>Checkout</h1>
                    <div className={css.price}><h1>$15</h1></div>
                </div>
            </div>
        </div>

    )
}
export default Basket