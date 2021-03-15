import React from 'react'
import Body from '../Body/Body'
import Menu from '../Menu/Menu'
import css from './MenuBodyContainer.module.css'


function MenuBodyContainer(props) {
    return (
        <>
            <Menu/>
            <Body data={props.data} setCount={props.count}/>
            
        </>
    )
}

export default MenuBodyContainer
