// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import axios from 'axios';
import './RetirarSenha.css';

const RetirarSenha = () => {
  const [senha, setSenha] = useState(null);

  const retirarSenha = async () => {
    try {
      const response = await axios.post('/api/retirar-senha');
      setSenha(response.data.senha);
    } catch (error) {
      console.error('Erro ao retirar senha:', error);
    }
  };

  return (
    <div className="retirar-senha">
      <button onClick={retirarSenha}>Retirar Senha</button>
      {senha && <p>Sua senha: {senha}</p>}
    </div>
  );
};

export default RetirarSenha;
