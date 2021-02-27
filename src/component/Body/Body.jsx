import React from 'react'
import css from "./Body.module.css";
import BodyNavbar from './BodyNavbar';
import BodyProducts from './BodyProducts';


const Body = (props) => {
    console.log(props);
    return (
        <div className={css.body}>
            <BodyNavbar />
            <BodyProducts data={props.data} />

        </div>
    )
}
export default Body