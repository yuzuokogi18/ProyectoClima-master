import React from 'react';
import Header from '../Components/organisms/Header'; // Asegúrate de que la ruta a Header sea correcta
import Weather from "../Components/organisms/Weather";

function Home() {
    return (
        <>
            <Header />
            <Weather />
        </>
    );
}

export default Home;
