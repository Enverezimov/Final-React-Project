import React from 'react'
import css from "./Basket.module.css";

const Basket = () => {

    return (
        <div className={css.basket}>
            <div className={css.basketNav}>
                <i className={`fas fa-shopping-basket ${css.icon}`}></i>
                <p className={css.item}>0 Item</p>
                <i className={`fas fa-times ${css.icons}`}></i>
            </div>
            <hr className={css.hr} />

            <div>
                <i className={`fas fa-shopping-basket ${css.faShoppingBasket}`}></i>
                <h1 className={css.title}>No Products Found</h1>
            </div>
            <h1 className={css.voucher}>Do you have a voucher?</h1>
            <div className={css.BasketBottom}>
                <h1 className={css.Checkout}>Checkout</h1>
                <div className={css.price}><h1>$15</h1></div>
            </div>
        </div>
    )
}
export default Basket