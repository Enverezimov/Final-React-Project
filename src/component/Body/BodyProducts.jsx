import React from 'react'
import css from "./Body.module.css";
import BodyCard from './BodyCard';

const BodyProducts = (props) => {
    console.log(props);
    return (
        <div className={css.bodyProduct}>
           {props.data.map((el,i)=> <BodyCard img={el.img} price={el.price} title={el.title} key={i} />)}
        </div>
    )
}

export default BodyProducts
