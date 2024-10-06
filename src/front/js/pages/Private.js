import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Private = () => {
  const navigate = useNavigate();
  const auth = localStorage.getItem('jwt-token');

  useEffect(() => {
    if (!auth) {
      navigate('/login');
    }
  }, [auth, navigate]);

  return (
    auth && (
      <div>
        <h1>Aqui solo los invitados</h1>
        <img src="https://img.freepik.com/fotos-premium/mono-fumando-cigarrillo-traje-corbata_727939-2011.jpg" style={{ width: "400px", marginLeft: "auto" }} />
      </div>
    )
  );
};

export default Private;
