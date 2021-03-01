import React from 'react'
import ProductInfoCard from './Product/ProductInfoCard'
import Product from './Productinfo/Product'
import css from './ProductContainer.module.css'


const ProductConaimer = (props) => {

    return (
        <div className={css.ProductCont}>
            <Product product={props.product} />

            <ProductInfoCard data={props.data} />
        </div>
    )

}

export default ProductConaimer

