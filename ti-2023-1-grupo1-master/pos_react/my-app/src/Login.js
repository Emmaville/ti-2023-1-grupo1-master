/*Lembrem de importar o react, qlqr css que estiver usando, e qualquer compenente que precisar*/
import React, {useState} from 'react';
import axios from 'axios';
import './style.css';
function  Login() {

  /*dentre desse "return()" e onde estara a propria formatacao da pagina, lembrem que nao e sempre 
  exatamente igual ao html, algumas coisas vcs terao que ajustar*/
 // const serverUrl = 'http://localhost:3001';
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();


    const loginData = {
      username: username,
      password: password,
    };
    //if (username.toLowerCase() === 'aluno' && password === '@cefet') {
     // alert('Login com sucesso');
      //window.location.href = '/pos_react/my-app/home.html';
    //} else {
      //alert('Login falhou');
   // }
  
    
  axios
   .post('http://localhost:3001/api/login', loginData)
    
    //headers: {
      //'Content-Type': 'application/json',
   // },
    //body: JSON.stringify(loginData),
  
    .then(response => {
    //.then(data => {
      if (response.data.message === 'Login successful') {
        console.log('Login successful',response.data);
        //console.log('Login successful');
        alert('Login successful');
        
        //window.location.href = 'pos_react\my-app/Home.js';
      
      
      
      } else {
        console.error('Login failed');
        alert('Login failed');
        
      }
    })
    .catch(error => {
      console.error('Login error:', error);
    });
};

  


  
  
    
 

  



  return (
    <>
    
    <div className="login-container">
      <form className="login-form"  onSubmit={handleSubmit}>
        <h2>Login to Education Website</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input type="text" id="username" name="username" value={username} onChange={(e) => setUsername(e.target.value)} required="" autoComplete="username"/>
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" value={password} onChange={(e) =>setPassword(e.target.value)} required="" autoComplete="current-password"/>
        </div>
        <button type="submit">login</button>
        <div className="bottom">
        <div className="left">
            
            <button>Signup</button>
            
        
              
            
            
             
        
          </div>
        </div>
      </form>
      
    </div>
    <footer>
      <div className="container">
        <p>© 2023 Não Teams - um trabalho de software web para o Cefet.</p>
      </div>
    </footer>
  </>

  )
  }

export default Login;
