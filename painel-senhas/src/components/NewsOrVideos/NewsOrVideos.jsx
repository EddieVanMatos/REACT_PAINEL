// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import useFetchData from '../../hooks/useFetchData';
import './NewsOrVideos.css';

const NewsOrVideos = () => {
  const { data, loading, error } = useFetchData('https://newsapi.org/v2/top-headlines?country=us&apiKey=YOUR_API_KEY');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data...</p>;

  return (
    <div className="news-or-videos">
      {data.map((article, index) => (
        <div key={index} className="news-item">
          <h3>{article.title}</h3>
          <p>{article.description}</p>
          <a href={article.url} target="_blank" rel="noopener noreferrer">Read more</a>
        </div>
      ))}
    </div>
  );
};

export default NewsOrVideos;
