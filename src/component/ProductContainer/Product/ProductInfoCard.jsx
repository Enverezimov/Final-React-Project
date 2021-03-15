import React from 'react'
import ProductCard from './ProductCard'
import css from './ProductInfoCard.module.css'

const ProductInfoCard = ({setCount,data}) => {
    
    return (<>
        <div>
            <h2 className={css.items}>Related Items</h2>
        

        <div className={css.Produce}>
            {data.map((el, i) => <ProductCard count={el.count || 0} {...el} key={el.id} setCount={(type) => setCount(el, type)}/>)}
        </div>
        </div>

    </>
    )
}

export default ProductInfoCard
