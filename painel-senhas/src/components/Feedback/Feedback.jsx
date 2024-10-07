// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Feedback.css';

const Feedback = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Feedback enviado:', feedback);
    // Lógica para enviar o feedback para o backend
    setFeedback('');
  };

  return (
    <div className="feedback">
      <h2>Feedback do Atendimento</h2>
      <form onSubmit={handleSubmit}>
        <textarea 
          value={feedback} 
          onChange={(e) => setFeedback(e.target.value)} 
          placeholder="Deixe seu feedback aqui..." 
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Feedback;
