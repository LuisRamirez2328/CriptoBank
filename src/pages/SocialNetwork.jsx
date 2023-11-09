
import React from "react";
import NavBar from "../components/molecules/NavBar";
import Footer from "../components/molecules/Footer";
import Bussnissman from "../assets/img/bussnissman.png";
import "../assets/styles/Card.css";

const usuarios = [
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" },
  { id: 1, nombre: "Usuario 1", cargo: "Desarrollador Web", ubicacion: "Ciudad1, País1" }
];

const TarjetaUsuario = ({ usuario }) => (
  <div className="max-w-md mx-auto bg-white rounded-md overflow-hidden shadow-md mb-4">
    <img src={Bussnissman} alt={`Foto de ${usuario.nombre}`} className="w-full h-auto object-cover" />
    <div className="p-4">
      <h2 className="text-xl font-bold mb-2">{usuario.nombre}</h2>
      <p className="text-gray-600">Cargo: {usuario.cargo}</p>
      <p className="text-gray-600">Ubicación: {usuario.ubicacion}</p>
      <p className="mt-4">{usuario.descripcion}</p>
    </div>
  </div>
);

function SocialNetwork() {
 
  const filasDeUsuarios = [];
  for (let i = 0; i < usuarios.length; i += 5) {
    filasDeUsuarios.push(usuarios.slice(i, i + 5));
  }

  return (
    <>
      <NavBar />
      <div className="flex flex-wrap">
        {filasDeUsuarios.map((fila, index) => (
          <div key={index} className="flex justify-between w-full mb-8">
            {fila.map((usuario) => (
              <TarjetaUsuario key={usuario.id} usuario={usuario} />
            ))}
          </div>
        ))}
      </div>
      <Footer />
    </>
  );
}

export default SocialNetwork;