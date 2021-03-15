import React from 'react';
import './Login.scss'


const Login = () => {
  return (
    <div className="login-container">
      <h2>Reserva tu gym</h2>
      <div className="container">
        <div className="input-container">
          <label for="CC">Documento de indentidad</label>
          <input type="text" id="CC" />
        </div>
        <div className="input-container">
          <label for="password" >Contraseña</label>
          <input type="password" id="password" />
        </div>
        <div className="terms">
          <label class="check-container">
            <input type="checkbox" />
            <span class="checkmark"></span>
          </label>
          <span class="highlighted-text">Acepto los terminos y condiciones</span>
        </div>
        <div className="btn-group">
          <button type="button" class="btn">Ingresar</button>
        </div>
      </div>
    </div>
  );
}

export default Login;