import React from 'react'
import { Logo } from './Logo/Logo'
import { BusquedaForm } from './BusquedaForm/BusquedaForm'

const Header = (buscarSubmit, query) => {
    return(
        <React.Fragment>
            <Logo />
            <BusquedaForm />
        </React.Fragment>
    )
}

export { Header }