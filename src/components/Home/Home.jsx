import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Header } from '../Header/Header'
import { MuestraImagenes } from '../MuestraImagenes/MuestraImagenes'
import './Home.css'

const Home = ({ busqueda }) => {

    const BASEurl = 'https://api.unsplash.com/';
    const apiKey = 'kGS0Yw08xWCh64TiRy_U421UZRvGQhnmYWYuoIPWAs8'
    const apiSearch = 'search/photos?query='
    const apiRandom = 'photos/random'
    const cantidadFotos = '5'
    const limit = 'count='

    const [imagenes, setImagenes] = useState([])
    const [cargando, setCargando] = useState(false)

    useEffect(() => {
        traeImagenes()
    }, [])

    const traeImagenes = async () => {
        setCargando(true)
        const response = await axios.get(`${BASEurl}${apiRandom}?client_id=${apiKey}&${limit}${cantidadFotos}`);
        setImagenes([...imagenes, ...response.data]);//... SPREAD
        setCargando(false)
    }


    return (
        <div 
            className='container'>
            <Header />        
            <div 
                className='resultados'>
                {console.log(imagenes)}
                {imagenes.map(imagen => (
                    <MuestraImagenes url={imagen.urls.small_s3} key={imagen.id} description={imagen.description} />
                ))}
            </div>
        </div>
    )
}
export { Home }