import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Cards from './Cards';

const Resultados = () => {
    const [movieResults, setMovieResults] = useState([]);

    const { keyword } = useParams();

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/search/movie?api_key=6cf5c5fab5174f4595296be288c836b8&language=en-US&query=${keyword}`;
        axios.get(endpoint).then((res) => {
            setMovieResults(res.data.results);
        });
    }, [keyword]);

    return (
        <div style={{ backgroundColor: '#e0ede9cf' }}>
            <h2 style={{ textAlign: 'center', padding: '20px 0px' }}>
                Resultados de:{' '}
                <span style={{ fontStyle: 'italic' }}>{keyword}</span>
            </h2>
            <div style={{ minHeight: '80vh' }}>
                {movieResults.length === 0 ? (
                    <h3 style={{ textAlign: 'center' }}>
                        Tu búsqueda no obtuvo resultados
                    </h3>
                ) : (
                    <div
                        style={{
                            display: 'flex',
                            justifyContent: 'center',
                            flexWrap: 'wrap',
                        }}
                    >
                        <Cards peliculas={movieResults} />;
                    </div>
                )}
            </div>
        </div>
    );
};

export default Resultados;
