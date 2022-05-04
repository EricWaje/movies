import swal from '@sweetalert/with-react';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Buscador = () => {
    let navigate = useNavigate();
    const handleSubmit = (e) => {
        e.preventDefault();
        const palabraBuscada = e.target.buscador.value.trim();

        if (palabraBuscada === '') {
            swal('No puedes dejar el campo vacío');
        } else {
            navigate(`/resultados/${palabraBuscada}`);
            e.target.buscador.value = '';
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                style={{ padding: '4px 6px' }}
                type="text"
                placeholder="Buscador"
                name="buscador"
            />
            <button style={{ padding: '4px 6px' }}>Search!</button>
        </form>
    );
};

export default Buscador;

/* let query = new URLSearchParams(window.location.search)
let keyword = query.get('palabraDeBusqueda') */
