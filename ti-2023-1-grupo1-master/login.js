
let loginForm = document.getElementById("login-form")
loginForm.addEventListener("submit", (e) => {
console.log(e)
e.preventDefault();
let username = document.getElementById("username");
let password = document.getElementById("password");

if (username.value.toLowerCase() == "aluno" && password.value == "@cefet") {
    alert("login com sucesso")
    location.href="/pre_react/home.html"
} else {
    // perform operation with form input
    alert("login falhou")
}
});








//to be used later
//<div class="right">
            //<label><a href="#">Forgot password?</a></label>
          //</div>

          //<input type="checkbox" id="check" />
      //<label htmlFor="check">Remember me</label>



   //   import React, { useState } from 'react';
//import './style.css';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();

    if (username.toLowerCase() === 'aluno' && password === '@cefet') {
      alert('Login com sucesso');
      window.location.href = '/pos_react/my-app/home.html';
    } else {
      alert('Login falhou');
    }
  };

  return (
    <>
      <div className="login-container">
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Login to Education Website</h2>
          <div className="form-group">
            <label htmlFor="username">Username</label>
            <input
              type="text"
              id="username"
              name="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Login</button>
          <div className="bottom">
            <div className="left">
              <button>Register?</button>
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
  );
}

export default Login;
