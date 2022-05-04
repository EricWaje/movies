import { Route, Routes } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Listado from './components/Listado';
import Login from './components/Login/Login';
import Header from './components/Header/Header';
import Detail from './components/Detail/Detail';
import Resultados from './components/Resultados';

function App() {
    return (
        <>
            <Header />
            <Routes>
                <Route exact path="/" element={<Login />} />
                <Route exact path="/listado" element={<Listado />} />
                <Route exact path="/detail/:id" element={<Detail />} />
                <Route
                    exact
                    path="/resultados/:keyword"
                    element={<Resultados />}
                />
            </Routes>
            <Footer />
        </>
    );
}

export default App;
