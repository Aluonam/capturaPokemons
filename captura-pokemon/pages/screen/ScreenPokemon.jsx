import React, {useState, useEffect} from 'react'

const ScreenPokemon = () => {

    const [datosAPI, setDatosAPI] = useState([])

    useEffect(() => {
      llamadaAPI()
    }, [])

    const llamadaAPI = async () =>  {
        const llamada = await fetch(`https://pokeapi.co/api/v2/pokemon/ditto`)
        const datos = await llamada.json()
        // console.log(datos)
        setDatosAPI(datos)
    }
    
  return (
    <div>ScreenPokemon</div>
  )
}

export default ScreenPokemon