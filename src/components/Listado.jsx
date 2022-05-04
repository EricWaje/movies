import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Cards from './Cards';

const Listado = ({ addOrRemoveFav }) => {
    const [peliculas, setPeliculas] = useState([]);

    let token = sessionStorage.getItem('token');

    useEffect(() => {
        const endpoint =
            'https://api.themoviedb.org/3/discover/movie?api_key=6cf5c5fab5174f4595296be288c836b8&language=en-US&page=1';
        axios
            .get(endpoint)
            .then((res) => {
                setPeliculas(res.data.results);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return (
        <>
            {!token && <Navigate to="/" />}
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                }}
            >
                <Cards peliculas={peliculas} />
            </div>
        </>
    );
};

export default Listado;
