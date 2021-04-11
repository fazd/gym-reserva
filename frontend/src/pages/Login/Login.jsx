import React, { useState } from 'react';
import { login } from '../../services/auth.service';
import './Login.scss'


const Login = () => {

  const [cc, setCc] = useState('');
  const [password, setPassword] = useState('');
  const [checked, setChecked] = useState(false);
  const [errorMesage, setErrorMessage] = useState('');
  const [errorVisible, setErrorVisible] = useState(false);

  const handleLogin = async () => {
    console.log(cc);
    console.log(password);
    console.log(checked);

    if (cc.length === 0 || password.length === 0 || !checked) {
      setErrorVisible(true);
      setErrorMessage('Por favor complete los campos y acepte los terminos');
    }
    else {
      setErrorVisible(false);
      const response = await login(cc, password);
      if (response.status === 422) {
        setErrorVisible(true);
        setErrorMessage('Credenciales incorrectas');
      }
    }

  }

  return (
    <div className="login-container">
      <h2>Reserva tu gym</h2>
      <div className="container">
        <div className="input-container">
          <label htmlFor="CC">Documento de indentidad</label>
          <input type="number" id="CC" onChange={(e) => setCc(e.target.value)} />
        </div>
        <div className="input-container">
          <label htmlFor="password" >Contraseña</label>
          <input type="password" id="password" onChange={(e) => setPassword(e.target.value)} />
        </div>
        <div className="terms">
          <label className="check-container">
            <input type="checkbox" onChange={(e) => setChecked(e.target.checked)} />
            <span className="checkmark"></span>
          </label>
          <span className="highlighted-text">Acepto los terminos y condiciones</span>
        </div>
        {errorVisible ? <div className="error">
          <span>{errorMesage}</span>
        </div> : null}
        <div className="btn-group">
          <button type="button" className="btn" onClick={handleLogin}>Ingresar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;