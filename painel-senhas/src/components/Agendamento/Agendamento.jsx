// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Agendamento.css';

const Agendamento = () => {
  const [nome, setNome] = useState('');
  const [data, setData] = useState('');

  const agendarAtendimento = (e) => {
    e.preventDefault();
    console.log(`Agendamento para ${nome} no dia ${data}`);
    // Lógica para agendar o atendimento
    setNome('');
    setData('');
  };

  return (
    <div className="agendamento">
      <h2>Agendar Atendimento</h2>
      <form onSubmit={agendarAtendimento}>
        <input 
          type="text" 
          placeholder="Nome" 
          value={nome} 
          onChange={(e) => setNome(e.target.value)} 
        />
        <input 
          type="date" 
          value={data} 
          onChange={(e) => setData(e.target.value)} 
        />
        <button type="submit">Agendar</button>
      </form>
    </div>
  );
};

export default Agendamento;
