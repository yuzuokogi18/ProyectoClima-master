// src/components/molecules/Text.jsx
import React, { useEffect } from 'react';
import Swal from 'sweetalert2';
import TitleText from '../atoms/TitleText';

const Text = ({ favorites, weatherData }) => {
  useEffect(() => {
    if (favorites.length > 0) {
      showDataInAlert();
    }
  }, [favorites, weatherData]);

  const showDataInAlert = () => {
    favorites.forEach(city => {
      const temperature = weatherData[city]?.temperature;
      const condition = weatherData[city]?.weatherCode;

      Swal.fire({
        title: city,
        html: `<p>Temperatura: ${temperature}°C</p><p>Condición: ${condition}</p>`,
        icon: 'info'
      });
    });
  };

  return null; 
};

export default Text;
