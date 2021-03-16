import React, { useState } from 'react'
import Basket from '../Basket/Basket';
import MiniBasket from '../MiniBasket/MiniBasket';
import css from "./Body.module.css";
import BodyNavbar from './BodyNavbar';
import BodyProducts from './BodyProducts';
import ProductContainer from '../ProductContainer/ProductContainer'


const Body = (props) => {

    return (
        <div className={css.body}>
            <BodyNavbar />
            <BodyProducts data={props.data} setCount={props.setCount} />
            {/* <button className={css.loadMore}>
                load more
            </button> */}
        </div>
    )
}
export default Body