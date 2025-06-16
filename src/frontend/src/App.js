import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Opcoes from './components/Opcoes';
import AdicionarProdutos from './pages/AdicionarProdutos';
import ListarProdutos from './pages/ListarProdutos';
import AtualizarProdutos from './pages/AtualizarProdutos';
import RemoverProdutos from './pages/RemoverProdutos';
import BuscarProdutos from './pages/BuscarProdutos';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="central">
          <Routes>
            <Route path="/" element={
              <>
                <h1>Controle de estoque</h1>
                <h2>Selecione uma das opções</h2>
                <Opcoes />
              </>
            } />
            <Route path="/adicionar" element={<AdicionarProdutos />} />
            <Route path="/listar" element={<ListarProdutos />} />
            <Route path="/atualizar" element={<AtualizarProdutos />} />
            <Route path="/remover" element={<RemoverProdutos />} />
            <Route path="/buscar" element={<BuscarProdutos />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;
