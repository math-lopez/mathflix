import React from 'react';
import './App.css';
import Menu from './components/menu'
import dadosIniciais from './data/dados_iniciais.json'

import BannerMain from './components/BannerMain'
import Carrousel from './components/Carousel'
import Footer from './components/Footer'


function App() {
  return (
    <div style={{ backgroundColor: "#141414" }}>
        <Menu />

        <BannerMain 
        videoTitle={dadosIniciais.categorias[0].videos[0].titulo}
        url={dadosIniciais.categorias[0].videos[0].url}
        videoDescription="O que é Front-end?"
        />

        <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[0]}
        />
        <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[1]}
        />
        <Carrousel
        ignoreFirstVideo
        category={dadosIniciais.categorias[2]}
        />
    </div>
  );
}

export default App;
