import React, {useState } from 'react'

const Botones = ({setState}) => {

   const [datosUsuario, setDatosUsuario] = useState([])
    
    
    const llamadaAPI = async () => {
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/${datosUsuario}`)
        const datos = await llamada.json()
        setState(datos)
    }

  return (
    <>
    <div>Botones</div>
    <input onChange={(e)=>{setDatosUsuario(e.target.value)}}></input>
    <button onClick={()=>{llamadaAPI()}}>Buscar</button>
    {/* modal de equipo */}
    </>
    
  )
}

export default Botones