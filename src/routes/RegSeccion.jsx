import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const styles = {
  container: 'min-h-screen flex items-center justify-center',
  card: 'bg-white p-8 rounded-lg shadow-md w-full max-w-sm',
  title: 'text-3xl font-bold text-center mb-6 text-blue-600',
  formGroup: 'mb-4',
  label: 'block text-gray-700 text-sm font-bold mb-2',
  input: 'shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline focus:border-blue-500',
  button: 'bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full',
  message: 'text-center text-sm mb-4',
};

const RegistroForm = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [messageType, setMessageType] = useState('');

  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    setMessage('');
    setMessageType('');

    if (password !== confirmPassword) {
      setMessage('Las contraseñas no coinciden.');
      setMessageType('error');
      return;
    }

    let registeredUsers = JSON.parse(localStorage.getItem('registeredUsers')) || [];

    const userExists = registeredUsers.some(user => user.username === username || user.email === email);
    if (userExists) {
      setMessage('El nombre de usuario o correo electrónico ya está registrado.');
      setMessageType('error');
      return;
    }

    const newUser = { username, email, password }; 
    registeredUsers.push(newUser);
    localStorage.setItem('registeredUsers', JSON.stringify(registeredUsers));

    setMessage('¡Registro exitoso! Redirigiendo al inicio de sesión...');
    setMessageType('success');

    setUsername('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');

    setTimeout(() => {
      navigate('/login');
    }, 1500);
  };

  const handleGoLogin = () => {
    navigate('/Iniciar-Seccion');
  };

  return (
    <div className={styles.container}>
      <div className={styles.card}>
        <h2 className={styles.title}>Registrarse</h2>
        <form onSubmit={handleRegister}>
          <div className={styles.formGroup}>
            <label htmlFor="username" className={styles.label}>
              Nombre de Usuario:
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
            <label htmlFor="email" className={styles.label}>
              Correo Electrónico:
            </label>
            <input
              type="email"
              id="email"
              className={styles.input}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
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
          <div className={styles.formGroup}>
            <label htmlFor="confirmPassword" className={styles.label}>
              Confirmar Contraseña:
            </label>
            <input
              type="password"
              id="confirmPassword"
              className={styles.input}
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          {message && (
            <p className={`${styles.message} ${messageType === 'error' ? 'text-red-500' : 'text-green-500'}`}>
              {message}
            </p>
          )}
          <button
            type="submit"
            className={styles.button}
          >
            Registrar
          </button>
        </form>
        <button
          onClick={handleGoLogin}
          className='mt-4 mx-auto text-blue-600 cursor-pointer flex justify-center hover:text-blue-900 hover:underline decoration-2'
        >
          ¿Ya tienes cuenta? Inicia sesión aquí.
        </button>
      </div>
    </div>
  );
};

export default RegistroForm;