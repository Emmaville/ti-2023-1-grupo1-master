/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React from 'react';
import './style.css'


function Salas() {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  
  return (
    <>
    
    <main>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="sidebar">
              <h3>Outras Disciplinas</h3>
              <ul>
                <li>
                  <a href="#">História</a>
                </li>
                <li>
                  <a href="#">Matemática</a>
                </li>
                <li>
                  <a href="#">Química</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-9">
            <h2>Biologia</h2>
            <p>
              Lorem Ipsum é simplesmente uma simulação de texto da indústria
              tipográfica e de impressos, e vem sendo utilizado desde o século
              XVI, quando um impressor desconhecido pegou uma bandeja de tipos e
              os embaralhou para fazer um livro de modelos de tipos.
            </p>
            <h3>Course Materials</h3>
            <ul>
              <li>
                <a href="#">Introdução à Biologia</a>
              </li>
              <li>
                <a href="#">A Química da vida</a>
              </li>
              <li>
                <a href="#">Estrutura celular e suas funções</a>
              </li>
              <li>
                <a href="#">Respiração celular</a>
              </li>
              <li>
                <a href="#">DNA e síntese proteica</a>
              </li>
              <li>
                <a href="#">Genética</a>
              </li>
              <li>
                <a href="#">Evolução e biodiversidade</a>
              </li>
              <li>
                <a href="#">Ecologia</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </main>
    <footer>
      <div className="container">
        <p>© 2023 Não Teams - um trabalho de software web para o Cefet.</p>
      </div>
    </footer>
  </>
  )
}

export default Salas;