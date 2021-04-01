import React, {useState} from 'react';
import { Link } from "react-router-dom";
import Logo from '../../assets/Logo.png';
import Logout from '../../assets/logout.svg';
import LogoutOnHover from '../../assets/logout hover.svg';
import './navbar.scss'

const Navbar = () => {

  const [logout, setLogout] = useState(Logout);

  const handlelogout = () => {
    console.log("TODO LOGOUT");
  }

  return (
    <div className="navbar-main-container center">
      <div className="logo">
        <Link to="/">
          <img src={Logo} on alt="logo" />
        </Link>
      </div>
      <div className="categories">
        <Link to="/" className="category">
          Mis reservas
        </Link>
        <Link to="/" className="category">
          Programar reserva
        </Link>
      </div>
      <div className="logout">
        <span
          onMouseEnter={ () => setLogout(LogoutOnHover)}
          onMouseLeave={ () => setLogout(Logout)}
          onClick={handlelogout}
        >Salir</span>
        <img 
          src={logout} 
          alt="Logout"
          onMouseEnter={ () => setLogout(LogoutOnHover)}
          onMouseLeave={ () => setLogout(Logout)}
          onClick={handlelogout}
        />
      </div>
    </div>
  )
};

export default Navbar;