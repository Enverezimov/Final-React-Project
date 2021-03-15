import React, { useState } from 'react'
import css from './ButtonsActive.module.css'

const ButtonsActive = ({count, setCount}) => {
   

    return (
        <div className={css.CountBox}>
            <button onClick={() => setCount('decrement')} className={css.btn}>-</button>
            <span >{count}</span>
            <button onClick={() => setCount('increment')} className={css.btn}>+</button>
        </div>
    )

}

export default ButtonsActive
