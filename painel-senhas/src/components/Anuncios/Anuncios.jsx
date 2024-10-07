// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Anuncios.css';

const anuncios = [
  { id: 1, title: 'Promoção 1', image: '/assets/promo1.png' },
  { id: 2, title: 'Promoção 2', image: '/assets/promo2.png' },
];

const Anuncios = () => {
  const [index, setIndex] = useState(0);

  const nextSlide = () => {
    setIndex((index + 1) % anuncios.length);
  };

  const prevSlide = () => {
    setIndex((index - 1 + anuncios.length) % anuncios.length);
  };

  return (
    <div className="anuncios">
      <button onClick={prevSlide}>&lt;</button>
      <div className="anuncio">
        <img src={anuncios[index].image} alt={anuncios[index].title} />
        <p>{anuncios[index].title}</p>
      </div>
      <button onClick={nextSlide}>&gt;</button>
    </div>
  );
};

export default Anuncios;
