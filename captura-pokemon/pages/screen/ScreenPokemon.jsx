
import Botones from '@/components/Botones'
import DatosPokemon from '@/components/DatosPokemon'
import React, {useState} from 'react'

const ScreenPokemon = () => {


    const [datosAPI, setDatosAPI] = useState([])
    

    console.log("datos api", datosAPI)

  return (
    <>
    {/* <div>ScreenPokemon</div> */}
    <Botones setState={setDatosAPI}></Botones>
    <DatosPokemon></DatosPokemon>
    </>
    
  )
}

export default ScreenPokemon