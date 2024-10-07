import axios from 'axios';

const api = axios.create({
  baseURL: 'https://newsapi.org/v2/', // ou baseURL da API que estiver usando
  headers: {
    'Content-Type': 'application/json',
  },
});

export const getNews = async () => {
  try {
    const response = await api.get('top-headlines?country=us&apiKey=YOUR_API_KEY');
    return response.data.articles;
  } catch (error) {
    console.error('Erro ao buscar notícias:', error);
  }
};
