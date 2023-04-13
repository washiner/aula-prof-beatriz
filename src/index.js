import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'
import { Navbar } from './components/NavBar';
import { Conteudo } from './components/Conteudo';
import { Rodape } from './components/Rodape';



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar/>
    <Conteudo/>
    <Rodape/>
  </React.StrictMode>
);
