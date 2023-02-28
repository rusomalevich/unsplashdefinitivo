import React, { useState, useEffect } from 'react'
import axios from 'axios'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Header } from '../Header/Header'
import { MuestraImagenes } from '../MuestraImagenes/MuestraImagenes'
import './Home.css'
import { Loader } from '../Loader/Loader'
import Masonry from 'react-masonry-css'

const Home = ({ busqueda }) => {

    const BASEurl = 'https://api.unsplash.com/';
    const apiKey = 'kGS0Yw08xWCh64TiRy_U421UZRvGQhnmYWYuoIPWAs8'
    const apiKey2 = 'htnGW05HKp9aqvSG7TeuzSrAt5BSWCRqhQzfjv04XOs'
    const apiSearch = 'search/photos?query='
    const apiRandom = 'photos/random'
    const cantidadFotos = '2'
    const limit = 'count='

    const [imagenes, setImagenes] = useState([])
    const [cargando, setCargando] = useState(false)
    const [infoImgs, setInfoImgs] = useState([])
    const [query, setQuery] = useState('')

    useEffect(() => {
        traeImagenes()
    }, [])

    const traeImagenes = async (query = '') => {
        setCargando(true)
        let response = []
        //const endpoint = query ? `${apiSearch}${query}&` : `${apiRandom}?`
        if (query!='') {
            //BUSQUEDA
            response = await axios.get(`${BASEurl}${apiSearch}${query}&per_page=${cantidadFotos}&client_id=${apiKey}`)
        } else {
            //RANDOM
            //response = await axios.get(`${BASEurl}${apiRandom}?client_id=${apiKey}&${limit}${cantidadFotos}`)
        }
        
        console.log(response.headers["x-ratelimit-remaining"])

        const imagenesConDatos = await Promise.all(
            response.data.map(async (imagen) => {
                // Consulta para obtener la imagen con los datos EXIF y los tags
                const imagenResponse = await axios.get(
                    `${BASEurl}photos/${imagen.id}/?client_id=${apiKey}`
                )
                return imagenResponse.data
            })
        )

        setImagenes([...imagenes, ...imagenesConDatos])
        setCargando(false)
    }

    const handleSearch = (query) => {
        setImagenes([])
        traeImagenes(query)
    }

    const breakpointColumnsObj = {
        default: 4,
        1200: 3,
        900: 2,
        700: 1
    }
    return (
        <div 
            className='container'>
            <Header />        

                {console.log(imagenes)}
            <InfiniteScroll
                
                dataLength={imagenes.length}
                next={traeImagenes}
                hasMore={true}
                scrollThreshold={0.9}
                Loader={<Loader />}
                >
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column">
               
                {imagenes.map(imagen => (
                    <MuestraImagenes
                        url={imagen.urls.small_s3}
                        key={imagen.id}
                        description={imagen.description}
                        ubicacion={imagen.location.name}
                        camara={imagen.exif.name}
                        usuario={imagen.user.name}
                        usuarioLink={imagen.user.links.html}
                        tags={imagen.tags.map(tag => tag.title)}
                        color={imagen.color}
                    />
                ))}
            </Masonry>
            </InfiniteScroll>
        </div>
    )
}
export { Home }