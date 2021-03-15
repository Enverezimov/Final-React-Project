import React from 'react'
import css from "./Body.module.css";
import BodyCard from './BodyCard';

const BodyProducts = (props) => {
   
    return (
        
        <div  className={css.bodyProduct}>
           {props.data.map((el,i)=> <BodyCard {...el} count={el.count || 0}  key={el.id} setCount={(type) => props.setCount(el, type)}/>)}
        </div>
    )
}

export default BodyProducts
