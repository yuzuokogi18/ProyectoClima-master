import React from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';

const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 5px;
  border: 1px solid #ccc;
  margin-bottom: 10px;
`;

const RemoveButton = styled.button`
  background-color: #dc3545;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
`;

const ViewWeatherButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 5px 20px;
  cursor: pointer;
  margin-top: 10px;
`;

const ListFavorites = ({ favorites, onRemove, onViewFavoritesWeather }) => {
  const handleRemove = (city) => {
    Swal.fire({
      icon: 'success',
      title: 'Ciudad eliminada de favoritos',
      text: `${city} ha sido eliminada de tu lista de favoritos.`,
      showConfirmButton: false,
      timer: 1500
    });
    onRemove(city);
  };

  return (
    <div>
      <List>
        {favorites.map(city => (
          <ListItem key={city}>
            <span>{city}</span>
            <RemoveButton onClick={() => handleRemove(city)}>Eliminar</RemoveButton>
          </ListItem>
        ))}
      </List>
      <ViewWeatherButton onClick={onViewFavoritesWeather}>Ver clima de los favoritos</ViewWeatherButton>
    </div>
  );
};

export default ListFavorites;
