import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import DatePicker from 'react-datepicker';


import './Pattern.scss';

import "react-datepicker/dist/react-datepicker.css";
import { getSedes } from '../../services/sede.service';



const Pattern = () => {
  const [user, setUser] = useState({ name: 'Fabio', cedula: '1234999999' })
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dayState, setDayState] = useState({
    L: true,
    Ma: true,
    Mi: true,
    J: true,
    V: true,
    S: true,
    D: false,
  });
  const [checkSelected, setCheckSelected] = useState('');
  const [hour, setHour] = useState('7');
  const [sedes, setSedes] = useState([]);
  const [selectedSede, setSelectedSede] = useState('none');
  const [customized, setCustomized] = useState(false);
  const [checked, setchecked] = useState({
    radio1: false,
    radio2: true,
    radio3: false,

  })

  useEffect(() => {
    getSedes().then(
      (res) => {
        setSedes(res);
      }
    )
  }, [])

  const handleCreate = async () => {
    console.log(user);
    console.log(selectedSede);
    console.log(dayState);
    console.log(startDate);
    console.log(endDate);
    console.log(hour);

  }

  const handleCheck = (event) => {
    const name = event.target.name;
    if (name === 'radio1') {
      setchecked({
        radio1: true,
        radio2: false,
        radio3: false,
      });
      setDayState({
        L: true,
        Ma: true,
        Mi: true,
        J: true,
        V: true,
        S: false,
        D: false,
      });
      setCustomized(false);
    }
    if (name === 'radio2') {
      setchecked({
        radio1: false,
        radio2: true,
        radio3: false,
      });
      setDayState({
        L: true,
        Ma: true,
        Mi: true,
        J: true,
        V: true,
        S: true,
        D: false,
      });
      setCustomized(false);
    }
    if (name === 'radio3') {
      setchecked({
        radio1: false,
        radio2: false,
        radio3: true,
      });
      setDayState({
        L: false,
        Ma: false,
        Mi: false,
        J: false,
        V: false,
        S: false,
        D: false,
      });
      setCustomized(true);
    }
  }

  const handleDays = (event) => {
    let daysSchedule = {
      L: false,
      Ma: false,
      Mi: false,
      J: false,
      V: false,
      S: false,
      D: false,
    }
    if (checked.radio3) {
      daysSchedule = dayState;
      daysSchedule[event.target.labels[0].innerText] = event.target.checked;
      setDayState(daysSchedule);
    }
    console.log(dayState);

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
          <div className="flexbox-column">
            {/* Sede  */}
            <div className="selection-box">
              <span className="label-span">Sede</span>
              <select className="selector" defaultValue="none" onChange={(e) => setSelectedSede(e.target.value)}>
                <option value={'none'}></option>

                {
                  sedes.map((value) => {
                    return <option key={value.nameid} value={value.nameid}>{value.name}</option>
                  })
                }
              </select>
            </div>
            <div className="selector-dates">
              <h3>Seleccione Los Dias</h3>
              <div className="radio-group flexbox-column">
                <label className="radio-btn-container">Lunes a viernes
                  <input type="radio" checked={checked.radio1} onChange={handleCheck} name="radio1" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-btn-container">Lunes a Sabados
                  <input type="radio" checked={checked.radio2} onChange={handleCheck} name="radio2" />
                  <span className="checkmark"></span>
                </label>
                <label className="radio-btn-container">Personalizado
                  <input type="radio" checked={checked.radio3} onChange={handleCheck} name="radio3" />
                  <span className="checkmark"></span>
                </label>
                {customized ?
                  <div className="days-container">
                    <label className="check-container">L
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                    <label className="check-container">Ma
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square" ></span>
                    </label>
                    <label className="check-container">Mi
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                    <label className="check-container">J
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                    <label className="check-container ">V
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                    <label className="check-container">S
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                    <label className="check-container">D
                    <input type="checkbox" onClick={handleDays} />
                      <span className="checkmark square"></span>
                    </label>
                  </div> : null
                }

              </div>
            </div>

          </div>
          <div className="flexbox-column ml-2">
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
            <div className="hour-container">
              <div className="selection-box">
                <span className="label-span">Hora</span>
                <select className="selector" defaultChecked="5" onChange={(e) => setHour(e.target.value)}>
                  <option value="5">5:00 - 6:00 am</option>
                  <option value="6">7:00 - 7:00 am</option>
                  <option value="7">7:00 - 8:00 am</option>
                  <option value="8">8:00 - 9:00 am</option>
                  <option value="9">9:00 - 10:00 am</option>
                  <option value="10">10:00 - 11:00 am</option>
                  <option value="11">11:00 - 12:00 pm</option>
                  <option value="12">12:00 - 1:00 pm</option>
                  <option value="13">1:00 - 2:00 pm</option>
                  <option value="14">2:00 - 3:00 pm</option>
                  <option value="15">3:00 - 4:00 pm</option>
                  <option value="16">4:00 - 5:00 pm</option>
                  <option value="17">5:00 - 6:00 pm</option>
                  <option value="18">6:00 - 7:00 pm</option>
                  <option value="19">7:00 - 8:00 pm</option>
                  <option value="20">8:00 - 9:00 pm</option>
                </select>
              </div>
            </div>
            <div className="btn-container">
              <button type="button" className="btn cancel m-1">Cancelar</button>
              <button type="button" className="btn confirm m-1" onClick={handleCreate}>Crear reservas</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pattern;