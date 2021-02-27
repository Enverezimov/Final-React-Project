import React from 'react'
import ProductCard from './ProductCard'
import css from './ProductInfoCard.module.css'

const ProductInfoCard = (props) => {
    console.log(props);
    return (<>
        <div>
          <h2 className={css.items}>Related Items</h2>
        </div>
        <div className={css.Produce}>
            {props.data.map((el,i)=><ProductCard img={el.img} price={el.price} title={el.title} key={i} />)}
        </div>
        </>
    )
}

export default ProductInfoCard
