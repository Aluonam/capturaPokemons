import React, {useState} from 'react'

const InputPokemon = () => {

    const [datosUsuario, setDatosUsuario] = useState()

  return (
    <>
    {datosUsuario}
    <div>InputPokemon</div>
    <input onChange={(e)=>{ setDatosUsuario(e.target.value) }}></input>
    </>
  )
}

export default InputPokemon