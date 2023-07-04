import React, { useState } from 'react';
import './style.css';
/*Lembrem de importar as componentes que vcs crierem, 
dessa forma:  */
import Home from './Home';
import Teste from './Teste.js';
import Salas from './Sala.js';
import Contato from './Contato.js';
import Login from './Login'; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  const[answer,setAnswer]=useState({});  /* to be checked */
  
  
  return (
    <>
      <Router>
        <header>
          <div className="container">
              <h1>Nao Teams</h1>
              <nav>
                <ul>
                  {/* Aqui e o navegador, simplesmente adicionem o nome simples do componente,
                  por exemplo Link to="Contato" ou Link to="Salas" etc*/}
                  <li><Link to="Inicio">Início</Link></li>
                  <li><Link to="Sala">Salas de Aula</Link></li>
                  <li><Link to="Testes">Testes</Link></li>
                  <li><Link to="Contato">Contato</Link></li>
                 {/* <li className="Signup"><Link to="Signup">Signup</Link></li> */}
                  <li className="login"><Link to="Login">Login</Link></li>
                
                </ul>
              </nav>
            </div>
          </header>
        <Routes>
          {/*Lembrem de tambem adicionar o route, senao o react dom n funciona
          No seguinte formato por exemplo: 
              <Route path="NomeDoComponente1" element={<NomeDoComponente2/>}/>   
          "NomeDoComponente2 precisa ser o nome exato do componente importado
          "NomeDoComponente1 nao precisa ser desde que seja igual ao nome usado no navegador(linha 22)*/}
          <Route index element={<Home/>}/>
          <Route path="Inicio" element={<Home/>}/>
          <Route path="Sala" element={<Salas/>}/>
          <Route path="Contato" element={<Contato/>}/>
          <Route path="Testes" element={<Teste answer={answer} setAnswer={setAnswer}/>}/>
          <Route path="Login" element={<Login/>}/>
          
        </Routes>
      </Router>  
    </>
  );
}

export default App;

