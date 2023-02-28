import React from 'react'
import { Header } from '../Header/Header'
import { MuestraImagenes } from '../MuestraImagenes/MuestraImagenes'

const Home = ({ busqueda }) => {

    return (
        <div className='container'>
            <Header />        
            <MuestraImagenes />
        </div>
    )
}
export { Home }