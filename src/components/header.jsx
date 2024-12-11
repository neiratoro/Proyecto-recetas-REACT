import React from 'react'
import logo from "./../assets/logo.png"
export default function Header() {
  return (
    <div className="p-5 bg-primary text-white text-center">
        <h1><img src={logo} width="90px"/> Recetas Doña Morelia</h1>
        <p>Cocina tradicional con amor...</p> 
    </div>
  )
}
