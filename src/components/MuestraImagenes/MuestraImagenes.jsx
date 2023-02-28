import React, { useState, useEffect } from 'react'
import { Loader } from '../Loader/Loader'
import './MuestraImagenes.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BsFillTagFill, BsFillMapFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"



const MuestraImagenes = ({ url, key, description, ubicacion, camara, usuario, usuarioLink, tags, color }) => {
 
    const mouseHover = (imgColor) => {
        document.body.style.background = imgColor
    }
    const mouseOut = () => {
        document.body.style.background = "var(--gris)"
    }

    return (
        <div
            className='card'
            onMouseEnter={() => mouseHover(color)}
            onMouseLeave={mouseOut}
            >
                <img 
                    id={key}
                    key={key}
                    src={url}
                    alt={description}
                />
                <div
                className='datosFoto'>
                {ubicacion && (<div
                            className="propiedades">
                    <p><BsFillMapFill /> {ubicacion}</p>
                        </div>
                        )}

                        {camara && (
                        <div
                            className="propiedades">
                        <p><BsFillCameraFill />{camara}</p>
                        </div>
                        )}
                        {usuario && (
                            <div
                                className="propiedades"
                            >
                                <p><a
                                    href={usuarioLink}
                                    target='_blank'
                                    className='creditos'
                                    title={`Ver más de ${usuario}`}
                                >
                                    <BsFillPersonFill /> {usuario}</a> /
                                    <a
                                        href='https://unsplash.com/es'
                                        title='Ir a Unsplash'
                                        target='_blank'
                                        className='creditos'
                                    >Unsplash</a></p>
                            </div>
                        )}
                        {tags.length > 0 && (
                            <div
                                className="propiedades etiquetas">
                                {tags.map((tag, index) =>
                                    index < 5 && (
                                        <a
                                            href='#'
                                            onClick={() => tagClick(tag)}
                                            className="etiqueta"
                                            key={`etiqueta${tag}`}
                                            id={`etiqueta${tag}`}>
                                            <BsFillTagFill />{tag}</a>))
                                }

                            </div>
                        )}
                </div>
        </div>
    )
}

export { MuestraImagenes }