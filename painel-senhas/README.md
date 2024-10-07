# Painel de Senhas

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


Aqui está um guia detalhado de como esse projeto funciona e como você pode rodá-lo no navegador corretamente para exibir todas as telas e funcionalidades.

1. Como Funciona o Projeto
Esse projeto é um sistema em React para gerenciar um Painel Gerador de Senhas, exibindo a senha atual, senhas chamadas e integrando vídeos/notícias de fontes externas. Ele inclui diversos componentes, como retirada de senhas, atendimento personalizado, exibição de informações da empresa, acessibilidade, monitoramento por gráficos e agendamento.

Estrutura Básica:
Painel de Senhas (SenhaBoard): Exibe a senha atual e gerencia a fila de senhas.
Notícias/Vídeos (NewsOrVideos): Mostra vídeos/notícias, utilizando APIs de vídeo como YouTube ou de notícias.
Retirada de Senha (RetirarSenha): Interface onde o usuário pode retirar uma senha.
Atendimento Personalizado (AtendimentoPersonalizado): Interface para os atendentes chamarem senhas ou usuários.
Info da Empresa (InfoEmpresa): Exibe as informações da empresa (missão, visão, produtos).
Acessibilidade (Acessibilidade): Suporte a alto contraste e acessibilidade geral.
Monitoramento (Monitoramento): Exibe gráficos de monitoramento de atendimentos utilizando chart.js.
Agendamento (Agendamento): Formulário para agendamento de atendimento.
Multilíngue: Implementado com i18n, permitindo a alternância entre idiomas (como inglês e português).
2. Passo a Passo para Rodar o Projeto no Navegador
Pré-requisitos:
Node.js (versão 16 ou mais recente)
npm ou yarn
Passos:
Instalar o Node.js e npm
Se você ainda não tiver o Node.js instalado, faça o download da última versão estável do Node.js (16 ou 18 de preferência). O npm será instalado automaticamente junto com o Node.js.

Instalar as Dependências
Abra o terminal e navegue até o diretório do projeto.
Execute o seguinte comando para instalar as dependências necessárias:
bash
Copiar código
npm install
Esse comando instala todas as bibliotecas listadas no arquivo package.json, como react, react-router-dom, axios, chart.js, styled-components, e outras necessárias para o projeto.

Rodar o Servidor de Desenvolvimento
Após instalar as dependências, você pode rodar o servidor de desenvolvimento para abrir o projeto no navegador.

Execute o comando:

bash
Copiar código
npm run dev
Esse comando vai inicializar o servidor de desenvolvimento do Vite. O terminal vai te mostrar um link (geralmente algo como http://localhost:3000) para abrir o projeto no navegador.

Acessar o Projeto no Navegador
Abra o navegador e vá até o endereço mostrado no terminal (geralmente http://localhost:3000). Você verá a aplicação React rodando com o painel de senhas e outras funcionalidades implementadas.

Configuração de Rotas
O projeto usa react-router-dom para navegação entre as telas. As rotas principais do projeto estão definidas no arquivo App.jsx. Aqui estão as páginas e suas rotas associadas:

Página Principal (Painel de Senhas): /
Vídeos ou Notícias: /noticias
Retirar Senha: /retirar-senha
Atendimento Personalizado: /atendimento
Informações da Empresa: /empresa
Anúncios: /anuncios
Feedback do Atendimento: /feedback
Agendamento: /agendamento
Acessibilidade: /acessibilidade
Monitoramento: /monitoramento
Para acessar cada uma dessas telas, basta navegar para as URLs correspondentes no navegador. Por exemplo:

Para acessar o Painel de Senhas: http://localhost:3000/
Para ver a tela de Vídeos ou Notícias: http://localhost:3000/noticias
Para retirar uma senha: http://localhost:3000/retirar-senha
Para ver o atendimento personalizado: http://localhost:3000/atendimento
E assim por diante para os outros componentes.
Estrutura de Componentes
Cada componente do projeto foi desenvolvido para lidar com uma parte específica do painel. A estrutura dos componentes está organizada em diretórios dentro de /src/components, e os componentes principais são:

SenhaBoard: Para gerenciar e exibir as senhas atuais e chamadas.
NewsOrVideos: Exibe vídeos ou notícias.
RetirarSenha: Interface para retirada de senhas.
AtendimentoPersonalizado: Controle de chamadas personalizadas de senhas.
InfoEmpresa: Exibe informações da empresa.
Anuncios: Carrossel de anúncios promocionais.
Feedback: Permite que os usuários forneçam feedback sobre o atendimento.
Agendamento: Interface para agendamento de atendimento.
Acessibilidade: Funcionalidade para aumentar a acessibilidade, como alto contraste.
Monitoramento: Gráficos de uso e atendimento.
5. Testar a Aplicação
Ao rodar o projeto no navegador, você pode interagir com os diferentes componentes e testar suas funcionalidades. Por exemplo:

Teste a retirada de senhas e veja como elas são adicionadas e removidas da fila no painel.
Veja as notícias e vídeos na área de NewsOrVideos.
Teste o formulário de feedback e a acessibilidade (alto contraste).
Verifique o monitoramento de atendimentos exibindo gráficos.
