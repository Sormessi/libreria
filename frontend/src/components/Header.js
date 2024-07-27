import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

const Header = () => {
  const { user, logout } = useContext(AuthContext);

  return (
    <header>
      <h1>Plataforma de Libros Colaborativa</h1>
      <nav>
        <Link to="/">Inicio</Link>
        {user ? (
          <>
            <Link to="/profile">Perfil</Link>
            <button onClick={logout}>Cerrar Sesión</button>
          </>
        ) : (
          <a href="/api/auth/google">Iniciar Sesión con Google</a>
        )}
      </nav>
    </header>
  );
};

export default Header;
