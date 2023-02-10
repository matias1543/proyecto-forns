import React from 'react';
import { Navbar } from '../components/Navbar'

export const AppLayout = ({ children }) => {
    return (
        <>
            <Navbar />
            { children }
        </>
    )
}
