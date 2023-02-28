import React, { useState, useEffect } from 'react'
import './MuestraImagenes.css'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { BsFillTagFill, BsFillMapFill, BsFillPersonFill, BsFillCameraFill } from "react-icons/bs"
import { Loader } from '../Loader/Loader'



const MuestraImagenes = ({ url, key, description }) => {
 

    return (
        <div
            className='card'>
            <img src={url} key={key} alt={description} />
        </div>
    )
}

export { MuestraImagenes }