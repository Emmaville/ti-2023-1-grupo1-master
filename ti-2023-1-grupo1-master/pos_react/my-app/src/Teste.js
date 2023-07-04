/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React, { useState } from 'react';
import './style.css'


function Teste(props) {
  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
  const[answer,setAnswer]=useState("");
  function handleInputChange(e){
    setAnswer({...answer,[e.target.name]: e.target.value});
  }
  function handleSubmit(e){
    e.preventDefault();
    props.setAnswer(props.answer);
  }
  return (
    <>
    <main>
      <div className="container">
        {/*test*/}
        <h2>Teste Múltipla Escolha</h2>
        <form method="post" action="#" onSubmit={handleSubmit}>
          <div className="question">
            <p className="pergunta">1. Qual é a capital da França?</p>
            <label>
              <input type="radio" name="question1" defaultValue="a" value={answer.question1} 
              onChange={handleInputChange} />
              a) Londres
            </label>
            <label>
              <input type="radio" name="question1" defaultValue="b" value={answer.question1} 
              onChange={handleInputChange}/>
              b) Paris
            </label>
            <label>
              <input type="radio" name="question1" defaultValue="c" value={answer.question1} 
              onChange={handleInputChange}/>
              c) Madrid
            </label>
          </div>
          <div className="question">
            <p className="pergunta">
              2. Qual é o maior planeta do Sistema Solar?
            </p>
            <label>
              <input type="radio" name="question2" defaultValue="a" value={answer.question2} 
              onChange={handleInputChange}/>
              a) Vênus
            </label>
            <label>
              <input type="radio" name="question2" defaultValue="b" value={answer.question2} 
              onChange={handleInputChange}/>
              b) Saturno
            </label>
            <label>
              <input type="radio" name="question2" defaultValue="c" value={answer.question2} 
              onChange={handleInputChange}/>
              c) Júpiter
            </label>
          </div>
          <div className="question">
            <p className="pergunta">3. Quem escreveu Harry Potter?</p>
            <label>
              <input type="radio" name="question3" defaultValue="a" value={answer.question3} 
              onChange={handleInputChange}/>
              a) J.K. Rowling
            </label>
            <label>
              <input type="radio" name="question3" defaultValue="b" value={answer.question3} 
              onChange={handleInputChange}/>
              b) Stephen King
            </label>
            <label>
              <input type="radio" name="question3" defaultValue="c" value={answer.question3} 
              onChange={handleInputChange}/>
              c) George R.R. Martin
            </label>
          </div>
          <button className="enviar-teste" type="submit">
            Enviar
          </button>
        </form>
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

export default Teste;