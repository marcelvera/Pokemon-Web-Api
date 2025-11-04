import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Perfil = () => {
  const { usuario } = useContext(AuthContext);

  if (!usuario) return <p>No has iniciado sesión.</p>;

  return (
    <div className="p-6 text-center h-screen">
      <h2 className="text-2xl font-bold">Perfil de Usuario</h2>
      <p>Nombre: {usuario.username}</p>
      <p>Correo: {usuario.email}</p>
    </div>
  );
};

export default Perfil;
