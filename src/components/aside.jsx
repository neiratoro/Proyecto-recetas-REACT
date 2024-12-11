import React from 'react'
import chef from "./../assets/chef.webp"
export default function Aside() {
  return (
    <div className="col-sm-4">
      <h2>Nuestra chef  </h2>
      <h5>Morelia Quintero</h5>
      <div className="fakeimg">
        <img src={chef} width="100%"/>
      </div>
      <p>Soy Chef graduado de la escuela del cocina de alta cocina CESDE,
        con 10 años de experiencia en alta cocina y
      </p>
      <h3 className="mt-4">Categorias</h3>
      <p>Algunas de nuestras recetas : </p>
      <ul className="nav nav-pills flex-column">
        <li className="nav-item">
          <a className="nav-link active" href="#">Bandeja Paisa</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Sancochos</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Consomes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Postres</a>
        </li>
      </ul>
      <hr className="d-sm-none"/>
    </div>
  )
}
