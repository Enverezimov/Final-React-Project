import React from 'react'
import css from './AddBAsket.module.css'

const AddBaket = () => {
    return (
        <div className={css.Add}>
            <div className={css.add}>
                <h3>Add Product</h3>
                <div className={css.nav}>
                    <p>Upload your Product image here</p>
                    <div className={css.navbar}>
                        <div className={css.navbarStyle}>
                            <p>upload image</p>
                        </div>

                    </div>
                </div>
                <div className={css.input}>
                    <div>
                        <h3 className={css.title}>Add your Product description and necessary information from here</h3>
                    </div>
                    <div className={css.addInput}>
                        <p>Name</p>
                        <input type="name" className={css.inp} />
                        <p>Description</p>
                        <input type="text" className={css.inp} />
                        <p>Unit</p>
                        <input type="text" className={css.inp} />
                        <p>Price</p>
                        <input type="text" className={css.inp} />
                        <p>Sale Price</p>
                        <input type="text" className={css.inp} />
                        <p>Discount In Percent</p>
                        <input type="text" className={css.inp} />
                        <p>Product Quantity</p>
                        <input type="text" className={css.inp} />
                        <p>Type</p>
                        <input type="text" className={css.inp} />
                        <p>Categories</p>
                        <input type="text" className={css.inp} />
                    </div>

                </div>
                <div className={css.buttons}>
                    <button className={css.btn}>Cancel</button>
                    <button className={css.button}>Created Product</button>
                </div>

            </div>
        </div>

    )
}

export default AddBaket
