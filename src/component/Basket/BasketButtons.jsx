import React, { useState } from 'react';
import css from "./Basket.module.css";

const BasketButtons = ({count, setCount}) => {

    return (
        <div className={css.counterBox}>
        <button onClick={() => setCount('decrement')} className={css.btn}>-</button>
        <span >{count}</span>
        <button onClick={() => setCount('increment')} className={css.btn}>+</button>
    </div>
    )
}
export default BasketButtons
