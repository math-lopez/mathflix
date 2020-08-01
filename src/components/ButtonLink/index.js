import React from 'react';
import '../menu/Menu.css'

function ButtonLink(props){
    console.log(props)
    return (
        <a href={props.href}>
            {props.children}
        </a>
    )
}
export default ButtonLink;