import React from 'react'
import Formulario from '@/components/Formulario'


const DatosPokemon = ({datosAPI}) => {

    

    const habilidadesPokemon = datosAPI.abilities?.map((elementoActual)=>{
        return(
            <>
            <ul key={elementoActual.id}>
                 <li>{elementoActual?.ability?.name}</li>
            </ul>
            
            </>
           
        )
    })


  return (
    <>
    <div>DatosPokemon debe parecer oculto</div>
    <br></br>
    <p>{datosAPI.name}</p>
    <img src={datosAPI?.sprites?.front_default} style={{height:"200px"}}></img>
    {habilidadesPokemon}
   <Formulario elementoPokemon={datosAPI}></Formulario>
    </>
  )
}

export default DatosPokemon