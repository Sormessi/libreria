import React, { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

const Profile = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <img src={user.image} alt={user.displayName} />
      <h1>{user.displayName}</h1>
      <p>{user.email}</p>
      {/* Aquí puedes añadir más información del perfil del usuario */}
    </div>
  );
};

export default Profile;
