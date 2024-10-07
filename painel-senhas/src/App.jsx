// eslint-disable-next-line no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SenhaBoard from './components/SenhaBoard/SenhaBoard';
import NewsOrVideos from './components/NewsOrVideos/NewsOrVideos';
import RetirarSenha from './components/RetirarSenha/RetirarSenha';
import AtendimentoPersonalizado from './components/AtendimentoPersonalizado/AtendimentoPersonalizado';
import InfoEmpresa from './components/InfoEmpresa/InfoEmpresa';
import Anuncios from './components/Anuncios/Anuncios';
import Feedback from './components/Feedback/Feedback';
import Agendamento from './components/Agendamento/Agendamento';
import Acessibilidade from './components/Acessibilidade/Acessibilidade';
import Monitoramento from './components/Monitoramento/Monitoramento';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SenhaBoard />} />
        <Route path="/noticias" element={<NewsOrVideos />} />
        <Route path="/retirar-senha" element={<RetirarSenha />} />
        <Route path="/atendimento" element={<AtendimentoPersonalizado />} />
        <Route path="/empresa" element={<InfoEmpresa />} />
        <Route path="/anuncios" element={<Anuncios />} />
        <Route path="/feedback" element={<Feedback />} />
        <Route path="/agendamento" element={<Agendamento />} />
        <Route path="/acessibilidade" element={<Acessibilidade />} />
        <Route path="/monitoramento" element={<Monitoramento />} />
      </Routes>
    </Router>
  );
};

export default App;
