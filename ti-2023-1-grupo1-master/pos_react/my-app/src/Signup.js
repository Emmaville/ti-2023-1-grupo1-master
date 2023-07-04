import React, { useState } from 'react';
import './style.css';

function Signup() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form submission

    // Trim inputs and perform validation
    const trimmedUsername = username.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();

    if (trimmedUsername === '' || trimmedEmail === '' || trimmedPassword === '') {
      alert('Please fill in all fields');
      return;
    }

    // Perform additional validation if needed
    // ...

    // Process the sign-up data
    // Here, you can send the form data to a server using AJAX or perform other actions

    // Reset form fields
    setUsername('');
    setEmail('');
    setPassword('');
  };

  return (
    <>
      <form id="signup-form" onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <button type="submit">Sign Up</button>
      </form>
    </>
  );
}

export default Signup;