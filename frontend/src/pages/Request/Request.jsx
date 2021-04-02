import React from 'react';
import './Request.scss';
import Navbar from '../../components/navbar/navbar';
import captcha_example from '../../assets/reserva_example.jpg';
import Calendar from '../../assets/calendar.svg';
import Map from '../../assets/maps-and-flags.svg';
import Clock from '../../assets/clock.svg';

const Request = () => {
  return (
    <div className="request-main-container">
      <Navbar />
      <h2 className="title" >Mis Reservas</h2>
      <div className="slider-container">
        <div className="request-container">
          <h3>Sede: Unico</h3>
          <div className="captcha">
            <img src={captcha_example} alt="captcha"/>
          </div>
          <div className="info-container">
            <div className="info-row">
              <img src={Calendar} alt="calendar"/>
              <span>25 de marzo 2021</span>  
            </div>  
            <div className="info-row">
              <img src={Clock} alt="clock"/>
              <span>7:00 AM</span>  
            </div>  
            <div className="info-row">
              <img src={Map} alt="map"/>
              <span>Calle Falsa 123</span>  
            </div>  
          </div> 
        </div>  
        <div className="request-container">
          <h3>Sede: Unico</h3>
          <div className="captcha">
            <img src={captcha_example} alt="captcha"/>
          </div>
          <div className="info-container">
            <div className="info-row">
              <img src={Calendar} alt="calendar"/>
              <span>25 de marzo 2021</span>  
            </div>  
            <div className="info-row">
              <img src={Clock} alt="clock"/>
              <span>7:00 AM</span>  
            </div>  
            <div className="info-row">
              <img src={Map} alt="map"/>
              <span>Calle Falsa 123</span>  
            </div>  
          </div> 
        </div>  
      </div>
    </div>
  );
}

export default Request;