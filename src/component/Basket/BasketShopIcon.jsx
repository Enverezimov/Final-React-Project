import React from 'react'
import css from "./Basket.module.css";

const BasketShopIcon = () => {

    return (
        <div>
            <i className={`fas fa-shopping-basket ${css.faShoppingBasket}`}></i>
            <h1 className={css.title}>No Products Found</h1>
        </div>
    )

}

export default BasketShopIcon
