import React, { useState } from 'react';
import './login.css';

function Login() {
    const [email, setEmail] = useState('');
    const [senha, setSenha] = useState('');
    const [mensagem, setMensagem] = useState('');
  
    const validarLogin = () => {
      if (email === 'tyciano.junior@pucpr.edu.br' && senha === '123456') {
        setMensagem('Acessado com sucesso!');
      } else {
        setMensagem('Usuário ou senha incorretos!');
      }
    };
  
    return (
      <div className="login-container">
        <h2>Login</h2>
        <input
          type="email"
          placeholder="E-mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="login-input"
        />
        <input
          type="password"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
          className="login-input"
        />
        <button onClick={validarLogin} className="login-button">Acessar</button>
        <label className="login-mensagem">{mensagem}</label>
      </div>
    );
  }
  
  export default Login;
