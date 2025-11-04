import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';
import logoInicio from '../assets/InicioDeSeccion.png'


const styles = {
  container: 'min-h-screen flex items-center justify-center',
  card: 'bg-white p-8 rounded-lg shadow-md w-full max-w-sm',
  title: 'text-3xl font-bold text-center mb-6 text-blue-600',
  formGroup: 'mb-4',
  label: 'block text-gray-700 text-sm font-bold mb-2',
  input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500',
  button: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full',
  logoutButton: 'mt-6 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full',
  welcomeMessage: 'text-center text-lg font-semibold text-blue-800'
};

const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    const usuarios = JSON.parse(localStorage.getItem('registeredUsers')) || [];
    const userFound = usuarios.find(
      (u) => u.username === username && u.password === password
    );

    if (userFound) {
      login(userFound);
      navigate('/'); // o donde desees redirigir
    } else {
      alert('Credenciales incorrectas');
    }
  };

  const handleGoReg = () => {
    navigate('/register'); 
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <img className=' w-45 h-45 ml-25' src={logoInicio} alt="" />
        <h2 className={styles.title}>Iniciar Sesión</h2>
        <form onSubmit={handleLogin}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Usuario:
            </label>
            <input
              type="text"
              id="username"
              className={styles.input}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="password" className={styles.label}>
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              className={styles.input}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className={styles.button}
          >
            Entrar
          </button>
        </form>
        
        <button
          onClick={handleGoReg}
          className='mt-4 mx-auto text-blue-600 cursor-pointer flex justify-center hover:text-blue-900 hover:underline decoration-2'
        >
          ¿No tienes cuenta? Click aquí.
        </button>
      </div>
    </div>
  );
};

export default LoginForm;