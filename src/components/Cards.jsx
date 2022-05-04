import React from 'react';
import s from './Listado.module.css';
import { Link } from 'react-router-dom';

const Cards = ({ peliculas, addOrRemoveFav }) => {
    return (
        <>
            {peliculas.map((pelicula) => (
                <div className={s.containerCard} key={pelicula.id}>
                    <div>
                        <img
                            src={
                                pelicula.poster_path === null
                                    ? 'https://fakeimg.pl/500/'
                                    : `https://image.tmdb.org/t/p/w500/${pelicula.poster_path}`
                            }
                            alt="img"
                        />
                    </div>
                    <div className={s.containerInfo}>
                        <h2>{pelicula.original_title}</h2>
                        <h3>{pelicula.overview.substring(0, 100)}...</h3>
                        <div>
                            <Link to={`/detail/${pelicula.id}`}>Detail</Link>
                            <div className={s.favorite}>
                                <span>🖤</span>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
    );
};

export default Cards;
