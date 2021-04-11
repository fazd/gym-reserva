import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/navbar';
import { mockCols } from '../../mocks/mockCols';
import './Pattern.scss';

const Patterns = () => {

  const [cols, setCols] = useState([]);

  useEffect(() => {
    setCols(mockCols);
  }, []);


  const getDays = (frequency) => {
    let result = "";
    result += (frequency.L ? 'L,' : '');
    result += (frequency.Ma ? 'Ma,' : '');
    result += (frequency.Mi ? 'Mi,' : '');
    result += (frequency.J ? 'J,' : '');
    result += (frequency.V ? 'V,' : '');
    result += (frequency.S ? 'S,' : '');
    result += (frequency.D ? 'D,' : '');
    result = result.substring(0, result.length - 1);
    return result;
  }

  const getHour = (hour) => {
    if (hour < 12) {
      return `${hour}:00-${hour + 1}:00 Am`;
    }
    else if (hour === 12) {
      return `${hour}:00-1:00 Pm`
    }
    else {
      hour -= 12;
      return `${hour}:00-${hour + 1}:00 Pm`;
    }
  }

  const getDate = (date) => {
    const dateSplit = date.split('-');
    return `${dateSplit[0]}/${dateSplit[1]}/${dateSplit[2]}`;
  }

  const handleSelection = (event) => {
    console.log('entra')
    console.log(event);
    console.log(event.target.key);
  }

  return (
    <div className="main-page">
      <Navbar />
      <div className="container mt-3">
        <h2 className="title yellow">Mis Frecuencias</h2>
        <div className="table-container">
          <div className="table-row-header">
            <span className="table-column">Frecuencia</span>
            <span className="table-column">Horario</span>
            <span className="table-column">Fecha inicio</span>
            <span className="table-column">Fecha fin</span>
            <span className="table-column">Sede</span>
          </div>
          <div className="table-content">
            {
              cols.map((column, index) => {
                return (
                  <div key={index} className="table-row  pt-1" onClick={handleSelection}>
                    <span className="table-column">{getDays(column.frequency)}</span>
                    <span className="table-column">{getHour(column.time)}</span>
                    <span className="table-column">{getDate(column.startDate)}</span>
                    <span className="table-column">{getDate(column.startDate)}</span>
                    <span className="table-column">{column.sede}</span>
                  </div>
                );
              })
            }

          </div>
        </div>
        <div className="btn-container-2">
          <button type="button" className="btn warning m-1">Saltar dias</button>
          <button type="button" className="btn cancel m-1">Eliminar frecuencia</button>
          <button type="button" className="btn confirm m-1">Crear frecuencia</button>
        </div>
      </div>
    </div >
  );
};

export default Patterns;