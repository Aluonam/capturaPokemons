
import Botones from '@/components/Botones'
import DatosPokemon from '@/components/DatosPokemon'
import React, {useState, useEffect} from 'react'

const ScreenPokemon = () => {


    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
      llamadaAPI()
    }, [])
    
    
    const llamadaAPI = async () => {
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto/`)
        const datos = await llamada.json()
        console.log(datos)
        setDatosAPI(datos)
    }



  return (
    <>
    {/* <div>ScreenPokemon</div> */}
    <Botones datosAPI={datosAPI}></Botones>
    <DatosPokemon></DatosPokemon>
    </>
    
  )
}

export default ScreenPokemon