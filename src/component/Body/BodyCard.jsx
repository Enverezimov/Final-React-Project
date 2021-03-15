import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import Buttons from '../Buttons/Buttons';
import ButtonsActive from '../ButtonsActive/ButtonsActive';
import ProductContainer from '../ProductContainer/ProductContainer';
import css from "./Body.module.css";

const BodyCard = (props) => {
    const { img, title, price, count, setCount,id } = props;
    return (

        <div className={css.card}>
            <NavLink className={css.NavLink} to={`productinfo/${id}`}>
                <img className={css.image} src={img} alt="" />
                <h6 className={css.price}>${price}</h6>
                <p className={css.title}>{title}</p>
            </NavLink>
            {count > 0 && <ButtonsActive count={count} setCount={setCount}/>}
            {count <= 0 && <Buttons setCount={setCount} />}
        </div>


    )
}

export default BodyCard
