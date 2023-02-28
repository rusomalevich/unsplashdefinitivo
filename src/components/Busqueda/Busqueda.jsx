//import React, { useState, useEffect } from 'react'
import React, { useState} from 'react'
import './Busqueda.css'
import { useSearchParams, useNavigate } from 'react-router-dom'
//import axios from 'axios'
import { MuestraImagenes } from '../MuestraImagenes/MuestraImagenes'
import { Header } from '../Header/Header'
import { BusquedaForm } from '../Header/BusquedaForm/BusquedaForm'
//import { Logo } from '../Header/Logo/Logo'
//import { BusquedaForm } from '../Header/BusquedaForm/BusquedaForm'
//import { BsFillTagFill, BsFillMapFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"
//import Masonry from 'react-masonry-css'
//import LazyLoad from 'react-lazy-load'

const Busqueda = ({ onSearch }) => {

    const [searchParams] = useSearchParams()
    const query = searchParams.get("query")
    console.log(query)
    const irA = useNavigate()

    return (
        <div className='container'>
            {<Header />}
            
            {/*
            <BusquedaForm/>
            <MuestraImagenes />
            */}
        </div>
    )
}

export { Busqueda }