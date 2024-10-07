// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './AtendimentoPersonalizado.css';

const AtendimentoPersonalizado = () => {
  const [nome, setNome] = useState('');
  const [numero, setNumero] = useState('');

  const chamarCliente = () => {
    console.log(`Chamando cliente ${nome} com a senha ${numero}`);
    // Implementar a lógica para chamar o cliente
  };

  return (
    <div className="atendimento-personalizado">
      <h2>Chamada de Atendimento</h2>
      <input 
        type="text" 
        placeholder="Nome do Cliente" 
        value={nome} 
        onChange={(e) => setNome(e.target.value)} 
      />
      <input 
        type="text" 
        placeholder="Número da Senha" 
        value={numero} 
        onChange={(e) => setNumero(e.target.value)} 
      />
      <button onClick={chamarCliente}>Chamar Cliente</button>
    </div>
  );
};

export default AtendimentoPersonalizado;
