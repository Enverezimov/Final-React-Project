import React from 'react'
import { NavLink } from 'react-router-dom';
import css from "./Menu.module.css";

const Menu = () => {
    return (
        <div className={css.menu}>

            <button className={css.btn}>
                <i className={`fas fa-apple-alt ${css.s}`}></i>
                <h1 className={css.fruits}>Fruits&Vegetables</h1>
            </button>
            <button className={css.btn}>
                <i className={`fas fa-drumstick-bite ${css.s}`}></i>
                <h1 className={css.fruits}>Meat&Fish</h1>
            </button>
            <button className={css.btn}>
                <i className={`fas fa-mug-hot ${css.s}`}></i>
                <h1 className={css.fruits}>Snacks</h1>
            </button>
            <button className={css.btn}>
                <i className={`fas fa-bone ${css.s}`}></i>
                <h1 className={css.fruits}>Pet Care</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-angry ${css.s}`}></i>
                <h1 className={css.fruits}>Home & Cleaning</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-egg ${css.s}`}></i>
                <h1 className={css.fruits}>Dairy</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-cookie-bite ${css.s}`}></i>
                <h1 className={css.fruits}>Cooking</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-pizza-slice ${css.s}`}></i>
                <h1 className={css.fruits}>Breakfast</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-wine-glass-alt ${css.s}`}></i>
                <h1 className={css.fruits}>Beverage</h1>
            </button>
            <button className={css.btn}>
            <i className={`fas fa-kiwi-bird ${css.s}`}></i>
                <h1 className={css.fruits}>Health Beauty</h1>
            </button>
        </div>
    )
}

export default Menu



// <div className={css.fruit}>a</div>
//             <div className={css.meat} >b</div>
//             <div className={css.snacks}>c</div>
//             <div className={css.petcare}>d</div>
//             <div className={css.cleaning}>e</div>
//             <div className={css.dairy}>f</div>
//             <div className={css.cooking}>r</div>
//             <div className={css.beakfast}>t</div>
//             <div className={css.beverage}>y</div>
//             <div className={css.beauty}>u</div>