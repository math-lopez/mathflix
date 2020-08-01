import React from 'react';
import Logo from '../../assets/images/Logo.png'
import './Menu.css'

import Button from '../Button'

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="MathFlix"/>
            </a>
            
            <Button as="a" href="/">
                UPLOAD VIDEO
            </Button>
        </nav>
    )
}
export default Menu;