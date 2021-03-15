import React from 'react'
import css from './Buttons.module.css'

const Buttons = ({setCount}) => {

    return (
        <div className={css.buttons}>
            <div className={css.box}>Add</div>
            <span onClick={() => setCount('increment')} className={css.add}>+</span>
        </div>
    )

}

export default Buttons
