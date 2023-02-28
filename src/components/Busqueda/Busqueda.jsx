//import React, { useState, useEffect } from 'react'
import React from 'react'
import './Busqueda.css'
//import { useSearchParams, useNavigate } from 'react-router-dom'
//import axios from 'axios'
import { MuestraImagenes } from '../MuestraImagenes/MuestraImagenes'
import { Header } from '../Header/Header'
//import { Logo } from '../Header/Logo/Logo'
//import { BusquedaForm } from '../Header/BusquedaForm/BusquedaForm'
//import { BsFillTagFill, BsFillMapFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"
//import Masonry from 'react-masonry-css'
//import LazyLoad from 'react-lazy-load'



const Busqueda = ({ params }) => {

    return (
        <div className='container'>
            <Header />
            <MuestraImagenes />
        </div>
    )
}

export { Busqueda }