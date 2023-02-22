import React from 'react';
import Logo from '../assets/PO.jpg'

export const Navbar = () => {
    return (
        <header className='header'>
            <nav className='header-container'>
                <a href="#" className='header-logo'>
                    <img src={Logo} className='header__img' alt="logo" />
                </a>

                <a href='#' className='header-burger hide-for-desktop'>
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

                <div className='header-buttons hide-for-mobile'>
                    <a href="#" className='button'><span>Ver todos los precios</span></a>
                    <a href="#" className='button'><span>Otros servicios</span></a>
                    <a href="#" className='button'><span>Consejos para tu instalación</span></a>
                    <a href="#" className='button'><span>Ayuda</span></a>
                </div>
            </nav>
        </header>
    )
}
