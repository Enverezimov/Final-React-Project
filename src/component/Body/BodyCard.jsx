import React from 'react'
import css from "./Body.module.css";

const BodyCard = (props) => {

    return (
        <div className={css.card}>
            <img className={css.image} src={props.img} alt="" />
            <h6 className={css.price}>${props.price}</h6>
            <p className={css.title}>{props.title}</p>
            <button className={css.btn}>a</button>
        </div>
    )
}

export default BodyCard
