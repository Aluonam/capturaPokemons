import React from 'react'

const DatosPokemon = ({datosAPI}) => {

    

    const habilidadesPokemon = datosAPI.abilities?.map((elementoActual)=>{
        return(
            <>
            <ul>
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
    </>
  )
}

export default DatosPokemon