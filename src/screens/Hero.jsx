import React from 'react';

export const Hero = () => {
    return (
        <div className='hero-container'>
            <div className='form-container'>
                <form action="#" className='form'>
                    <h1 className='form-title'>¡Obtené el certificado DCI en 48 horas!</h1>
                    <p className='form-description'>Te resolvemos el certificado de forma rápida, simple y económica. Solicitá tu cotización ahora y nos contactaremos contigo de inmediato con toda la información.</p>
                    <p className='form-warning'>¡Llená el formulario y aprovechá un descuento de $2.000!</p>
                    
                    <div className='form-field'>
                        <label htmlFor="ubicacion">Ubicación (barrio)</label>
                        <input type="text" name='ubicacion' placeholder='Caballito' />
                    </div>

                    <div className='form-field'>
                        <label htmlFor="sos">Sos...</label>
                        <input type="text" name="sos" placeholder='Electricista' />
                    </div>
                    
                    <div className='form-field'>
                        <label htmlFor="obra">Motivo</label>
                        <input type="text" name='obra' placeholder='Obra' />
                    </div>

                    <button className='button'>COTIZAR</button>
                </form>
            </div>
            <div className='notice-container'>
                <div className='notice'>
                    <p>¿Sos electricista?</p>
                    <p>¡Aprovechá nuestros descuentos especiales!</p>
                    <p>Llená ahora el formulario o contactanos por WhatSapp</p>
                </div>
                <div className='whatsapp'>
                    <p>ICON</p>
                </div>
            </div>
        </div>
    )
}
