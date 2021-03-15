import React from 'react'
import css from "./Basket.module.css";
import BasketButtons from './BasketButtons';

const BasketCard = ({ onReset, setCount, items }) => {
    return (
        <>
            {items.map(item => (
                <div className={css.cardItem}>
                    <BasketButtons 
                        count={item.count}
                        setCount={(type) => setCount(item,type)} 
                    />
                    <img className={css.img} src={item.img} alt="" />
                    <div className={css.cardInfo}>

                    </div>
                    <span className={css.cardPrice}></span>
                    <i onClick={onReset.bind(null, item)} className={`fas fa-times ${css.iconClose}`}></i>
                </div>
            ))}
        </>
    )

}

export default BasketCard
