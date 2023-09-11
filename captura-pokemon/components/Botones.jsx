import React, { useEffect, useState } from 'react'

const Botones = ({datosAPI}) => {


    //INPUT 
    const [datosUsuario, setDatosUsuario] = useState([])
    //BOTON BUSCAR

    //MODAL 


  return (
    <>
    <div>Botones</div>
    <input onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
    </>
    
  )
}

export default Botones