import React from 'react'
import bandejaPaisa from "./../assets/bandejaPaisa.jpg"
export default function Articles(props) {
    console.log(props);
    let {recipes} = props;
  return (
    <>
        <h2>{recipes. titulo}</h2>
        <h5>{ recipes.subtitulo}</h5>
        <div className="fakeimg">
            <img src={recipes.imagenes[0]}  width="100%"/>
        </div>
        <p>{recipes.texto}</p>
        <button className='btn btn-primary'>Leer Receta</button>
    </>
  )
}
