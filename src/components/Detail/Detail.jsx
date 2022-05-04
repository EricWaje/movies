import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Navigate, useParams } from 'react-router-dom';
import s from './Detail.module.css';

const Detail = () => {
    const [movie, setMovie] = useState({});
    const { id } = useParams();

    let token = sessionStorage.getItem('token');

    useEffect(() => {
        const endpoint = `https://api.themoviedb.org/3/movie/${id}?api_key=6cf5c5fab5174f4595296be288c836b8&language=en-US`;
        axios.get(endpoint).then((res) => {
            setMovie(res.data);
        });
    }, [id]);

    return (
        <>
            {!token && <Navigate to="/" />}
            <div className={s.containerDetail} key={movie.id}>
                <div>
                    <img
                        src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                        alt="img"
                    />
                </div>
                <div className={s.containerDetailInfo}>
                    <h2>{movie.title}</h2>
                    <p>{movie.overview}</p>
                    <h3>Fecha de lanzamiento: {movie.release_date}</h3>
                </div>
            </div>
        </>
    );
};

export default Detail;
