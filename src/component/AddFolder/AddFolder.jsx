import React, { useState } from 'react'
import AddBaket from '../Addbasket/AddBaket'
import Navbar from '../Navbar/Navbar'
import css from './AddFolder.module.css'

const AddFolder = () => {
    const [editMode, setEditmode] = useState(false)
    
    return (
        <div className={css.Add}>

            <div className={css.addNavbar} >
                <img className={css.logo} src="data:image/png;base64,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" alt="" />
                
                {editMode && <AddBaket/>}
                {!editMode && <button className={css.btn} onClick={() => setEditmode(true)}>ADD
                </button>}
                <div className={css.image}>
                </div>
            </div>
            <div className={css.addfolder}>
                <h1>Products</h1>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Dropdown button
                </button>
                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        <li><a className="dropdown-item" href="#">Action</a></li>
                        <li><a className="dropdown-item" href="#">Another action</a></li>
                        <li><a className="dropdown-item" href="#">Something else here</a></li>
                    </ul>
                </div>
                <input className={css.search} type="search" placeholder='Ex:Search By Name' />
            </div>
            <div className={css.AddGrid}>
                <div className={css.Card}>
                    <img className={css.img} src="data:image/jpeg;base64,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" alt="" />
                    <div className={css.cardFoter}>
                        <p className={css.title}>Bona Hardwood Floor Cleaner</p>
                        <p className={css.price}>$2.00</p>
                    </div>
                </div>
            </div>

        </div>
    )

}

export default AddFolder
