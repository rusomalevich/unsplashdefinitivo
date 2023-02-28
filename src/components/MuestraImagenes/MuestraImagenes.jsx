import React, { useState, useEffect } from 'react'
import { useNavigate, useSearchParams } from 'react-router-dom'
import axios from 'axios'
import { BsFillTagFill, BsFillMapFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"
import './MuestraImagenes.css'
import { Loader } from '../Loader/Loader'



const MuestraImagenes = ({ busqueda }) => {
    const BASEurl = 'https://api.unsplash.com/';
    //const apiKey = process.env.REACT_APP_ACCESSKEY;
    const apiKey = 'kGS0Yw08xWCh64TiRy_U421UZRvGQhnmYWYuoIPWAs8'
    const apiSearch = 'search/photos?query='
    const apiRandom = 'photos/random'
    const cantidadFotos = '5'
    const limit = 'count='

    const [imagenes, setImagenes] = useState([])
    const [cargando, setCargando] = useState(false)
    
    useEffect(() => {
        const traeImagenes = async () => {
            setCargando(true)
            const response = await axios.get(`${BASEurl}${apiRandom}?client_id=${apiKey}&${limit}${cantidadFotos}`);
            console.log(response)
            setImagenes(response.data);
            setCargando(false)
        }
        traeImagenes()
    }, [])

    return (
        <div 
            className='resultados'>
                <Loader />
            {/*cargando ? <Loader /> : infoImg*/}
        </div>
    )
}

export { MuestraImagenes }