import React, { useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import DatePicker from 'react-datepicker';


import './Pattern.scss';

import "react-datepicker/dist/react-datepicker.css";



const Pattern = () => {
  const [user, setUser] = useState({ name: 'Fabio', cedula: '1234999999' })
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dayState, setDayState] = useState('m-f');
  const [checkSelected, setCheckSelected] = useState('');
  const [hour, setHour] = useState('7');

  const handleCreate = () => {
    console.log(user);
    console.log(startDate);
    console.log(endDate);
    console.log(startDate);
  }


  return (
    <div className="main-page">
      <Navbar />
      <div className="container mt-3">
        <h2 className="title">Reservar entrenamiento</h2>
        <div className="space-between">
          <span>Hola {user.name}</span>
          <span>Cedula: {user.cedula}</span>
        </div>
        <div className="fields">
          <div className="flexbox-row">
            <div className="selection-box">
              <span className="label-span">Sede</span>
              <select className="selector">
                <option value="value1">Value1</option>
                <option value="value2">Value2</option>
                <option value="value3">Value3</option>
                <option value="value4">Value4</option>
              </select>
            </div>
            <div className="date-group">
              <div className="date-box flexbox-column">
                <span className="label-span">Fecha de inicio</span>
                <DatePicker
                  className="date-picker"
                  selected={startDate}
                  onChange={startDate => setStartDate(startDate)}
                />
              </div>
              <div className="date-box flexbox-column">
                <span className="label-span" >Fecha fin</span>
                <DatePicker
                  className="date-picker"
                  selected={endDate}
                  onChange={date => setEndDate(date)}
                />
              </div>
            </div>
          </div>
          <div className="flexbox-row">
            <div className="selector-dates flexbox-column">
              <h3>Seleccione Los Dias</h3>
              <div className="radio-group flexbox-column">
                <label class="radio-btn-container">Lunes a viernes
                  <input type="radio" checked="checked" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="radio-btn-container">Lunes a Sabados
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <label class="radio-btn-container">Personalizado
                  <input type="radio" name="radio" />
                  <span class="checkmark"></span>
                </label>
                <div className="days-container">
                  <label class="check-container">L
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container">Ma
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container">Mi
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container">J
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container ">V
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container ">S
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                  <label class="check-container ">D
                    <input type="checkbox" />
                    <span class="checkmark square"></span>
                  </label>
                </div>
              </div>
            </div>
            <div className="hour-container">
              <div className="selection-box">
                <span className="label-span">Hora</span>
                <select className="selector" onfocus="this.size=8;">
                  <option value="5">5:00 - 6:00 am</option>
                  <option value="6">7:00 - 7:00 am</option>
                  <option value="7" selected>7:00 - 8:00 am</option>
                  <option value="8">8:00 - 9:00 am</option>
                  <option value="9">9:00 - 10:00 am</option>
                  <option value="10">10:00 - 11:00 am</option>
                  <option value="11">11:00 - 12:00 pm</option>
                  <option value="12">12:00 - 1:00 am</option>
                  <option value="13">1:00 - 2:00 am</option>
                  <option value="14">2:00 - 3:00 am</option>
                  <option value="15">3:00 - 4:00 am</option>
                  <option value="16">4:00 - 5:00 am</option>
                  <option value="17">5:00 - 6:00 am</option>
                  <option value="18">6:00 - 7:00 am</option>
                  <option value="19">7:00 - 8:00 am</option>
                  <option value="20">8:00 - 9:00 am</option>
                </select>
              </div>
            </div>
          </div>
          <div className="flexbox-row vw-60">
            <div className="btn-container">
              <button type="button" class="btn cancel m-1">Cancelar</button>
              <button type="button" class="btn confirm m-1">Crear nueva reserva</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pattern;