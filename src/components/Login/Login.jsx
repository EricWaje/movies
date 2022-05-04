import React from 'react';
import axios from 'axios';
import swal from '@sweetalert/with-react';
import { useNavigate } from 'react-router-dom';
import s from './Login.module.css';

const Login = () => {
    let navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        const regexEmail =
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if (email === '' || password === '') {
            swal('Campos vacíos', 'llena los campos', 'warning');
            return;
        }

        if (email !== '' && !regexEmail.test(email)) {
            swal('Email inválido');
            return;
        }

        if (email !== 'challenge@alkemy.org' || password !== 'react') {
            swal('Credenciales inválidas');
            return;
        }

        axios
            .post('http://challenge-react.alkemy.org', { email, password })
            .then((res) => {
                swal('Ingreso exitoso');
                const token = res.data.token;
                sessionStorage.setItem('token', token);
                navigate('/listado');
            });
    };

    return (
        <section className={s.formLogin}>
            <h2>Bienvenidos</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="email"
                    placeholder="email@example.com"
                />
                <input type="password" name="password" placeholder="******" />
                <button>Ingresar</button>
            </form>
        </section>
    );
};

export default Login;
