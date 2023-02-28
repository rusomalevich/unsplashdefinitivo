import React from 'react'
import { Logo } from './Logo/Logo'
import { BusquedaForm } from './BusquedaForm/BusquedaForm'

const Header = () => {
    return(
        <React.Fragment>
            <Logo />
            <BusquedaForm /*onSearchSubmit={buscarSubmit}*/ />
        </React.Fragment>
    )
}

export { Header }