import React, { useState } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BsSearch } from "react-icons/bs"
import { MuestraImagenes } from '../../MuestraImagenes/MuestraImagenes'
import { Home } from "../../Home/Home"

const BusquedaForm = ({ onSearchSubmit, valorinicial }) => {
    
    const [busqueda, setBusqueda] = useState('')
    const irA = useNavigate()
    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    
    const buscarSubmit = event => {
        event.preventDefault()
        //onSearchSubmit(query)
        console.log(query)
        irA(`/search?query=${encodeURIComponent(busqueda)}`)
    }
    

    const buscaCambioInput = event => {
        setBusqueda(event.target.value)
        console.log(busqueda)
    }

    return (
        <form
            onSubmit={buscarSubmit}
            className='buscador'>
            <input
                type="search"
                name="busqueda"
                placeholder='Buscar imágenes'
                className='inputBuscar'
                defaultValue={valorinicial}
                onChange={buscaCambioInput}
            />
            <button
                type="submit"
                className='botonBuscar'><BsSearch /></button>

        </form>

        
    )
}

export { BusquedaForm }