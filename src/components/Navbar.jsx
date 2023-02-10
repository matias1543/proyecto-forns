import React from 'react';
import Logo from '../assets/PO.jpg'

export const Navbar = () => {
    return (
        <header className='header'>
            <nav className='flex flex-jc-sb flex-ai-c'>
                <a href="#" className='header-logo'>
                    <img src={Logo} className='header__img' alt="logo" />
                </a>

                <div className='header-buttons'>
                    <a href="#" className='button'>Ver todos los precios</a>
                    <a href="#" className='button'>Otros servicios</a>
                    <a href="#" className='button'>Consejos para tu instalación</a>
                    <a href="#" className='button'>Ayuda</a>
                </div>
            </nav>
        </header>
    )
}
