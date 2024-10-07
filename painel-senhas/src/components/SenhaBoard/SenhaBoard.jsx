// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './SenhaBoard.css';

const SenhaBoard = () => {
  const [senhaAtual, setSenhaAtual] = useState(null); // Adiciona o setter
  const [fila, setFila] = useState([1, 2, 3, 4, 5]); // Inicializa a fila com algumas senhas

  const chamarProximaSenha = () => {
    if (fila.length > 0) {
      const proximaSenha = fila[0]; // Pega a primeira senha da fila
      setSenhaAtual(proximaSenha); // Atualiza a senha atual
      setFila(fila.slice(1)); // Remove a senha da fila
    } else {
      alert('Não há mais senhas na fila');
    }
  };

  return (
    <div className="senha-board">
      <h2>Senha Atual: {senhaAtual || 'Aguardando...'}</h2>
      <button onClick={chamarProximaSenha}>Chamar Próxima Senha</button>
      <ul>
        {fila.length > 0 ? (
          fila.map((senha, index) => (
            <li key={index}>Senha {senha}</li>
          ))
        ) : (
          <li>Fila vazia</li>
        )}
      </ul>
    </div>
  );
};

export default SenhaBoard;

