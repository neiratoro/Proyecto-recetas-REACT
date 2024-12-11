import React from 'react'
import Articles from './articles';
import datos from "./../../public/datos.json";

export default function Content() {
    let receta ="bandeja Paisa";
    let {Pastas, Sopas, Postres, Ensaladas } = datos;
  return (
    <div className="col-sm-8">
        {
        Ensaladas.map((receta, i)=>(
                <Articles key={i} recipes={receta} />
            ))
        }
       
  </div>
  )
}
