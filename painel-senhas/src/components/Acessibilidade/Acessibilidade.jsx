// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Acessibilidade.css';

const Acessibilidade = () => {
  const [contrasteAlto, setContrasteAlto] = useState(false);

  const toggleContraste = () => {
    setContrasteAlto(!contrasteAlto);
    if (!contrasteAlto) {
      document.body.classList.add('contraste-alto');
    } else {
      document.body.classList.remove('contraste-alto');
    }
  };

  return (
    <div className="acessibilidade">
      <h2>Acessibilidade</h2>
      <button onClick={toggleContraste}>
        {contrasteAlto ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste'}
      </button>
    </div>
  );
};

export default Acessibilidade;
