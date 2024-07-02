import React, { useState } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import SearchForm from '../molecules/SearchForm';
import FavoritesList from '../molecules/FavoritesList';
import ListFavorites from '../molecules/ListFavorites';
import Text from '../molecules/Text';

const Container = styled.div`
  padding: 20px;
`;

const Weather = () => {
  const [city, setCity] = useState('');
  const [favorites, setFavorites] = useState([]);
  const [weatherData, setWeatherData] = useState({});
  const [showFavoritesList, setShowFavoritesList] = useState(false);

  const handleInputChange = (e) => {
    setCity(e.target.value);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    const weather = await getWeatherData(city);
    if (weather) {
      setWeatherData({ ...weatherData, [city]: weather });

      Swal.fire({
        title: `Clima en ${city}`,
        text: `Temperatura: ${weather.temperature}°C, Clima: ${weather.description}`,
        icon: 'info',
        confirmButtonText: 'OK'
      });
    }
    setCity('');
  };

  const handleAddToFavorites = (city) => {
    if (!favorites.includes(city)) {
      setFavorites([...favorites, city]);
      Swal.fire({
        icon: 'success',
        title: 'Ciudad agregada a favoritos',
        text: `${city} ha sido agregada a tu lista de favoritos.`,
        showConfirmButton: false,
        timer: 1500
      });
    }
  };

  const handleRemoveCity = (city) => {
    setFavorites(favorites.filter(fav => fav !== city));
    Swal.fire({
      icon: 'success',
      title: 'Ciudad eliminada',
      text: `${city} ha sido eliminada de tus favoritos.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleRemoveWeatherData = (city) => {
    const newWeatherData = { ...weatherData };
    delete newWeatherData[city];
    setWeatherData(newWeatherData);
    Swal.fire({
      icon: 'success',
      title: 'Búsqueda eliminada',
      text: `${city} ha sido eliminada de la lista de búsqueda.`,
      showConfirmButton: false,
      timer: 1500
    });
  };

  const handleViewFavorites = (e) => {
    e.stopPropagation();
    setShowFavoritesList(!showFavoritesList);
  };

  const handleViewFavoritesWeather = () => {
    let weatherInfo = favorites.map(city => {
      const weather = weatherData[city];
      return `${city}: Temperatura: ${weather.temperature}°C, Clima: ${weather.description}`;
    }).join('\n');

    Swal.fire({
      title: 'Clima de Favoritos',
      text: weatherInfo || 'No hay ciudades en favoritos.',
      icon: 'info',
      confirmButtonText: 'OK'
    });
  };

  const getWeatherData = async (city) => {
    const apiKey = '79ccffed511d96caf319a046e96b08f0';
    try {
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&lang=es&appid=${apiKey}`);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      const { temp } = data.main;
      const description = data.weather[0].description;
      return { temperature: temp, description };
    } catch (error) {
      console.error('Error fetching weather data:', error);
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'No se pudo obtener la información del clima. Verifica el nombre de la ciudad e inténtalo nuevamente.',
        confirmButtonText: 'OK'
      });
    }
    return null;
  };

  return (
    <Container onClick={() => setShowFavoritesList(false)}>
      <SearchForm 
        value={city} 
        onChange={handleInputChange} 
        onSubmit={handleFormSubmit} 
      />
      <FavoritesList 
        cities={Object.keys(weatherData)} 
        onRemove={handleRemoveWeatherData} 
        onAddToFavorites={handleAddToFavorites}
        onViewFavorites={handleViewFavorites}
        showFavoritesList={showFavoritesList}
      />
      {showFavoritesList && (
        <ListFavorites 
          favorites={favorites} 
          onRemove={handleRemoveCity} 
          onViewFavoritesWeather={handleViewFavoritesWeather}
        />
      )}
      <Text favorites={favorites} weatherData={weatherData} />
    </Container>
  );
};

export default Weather;
