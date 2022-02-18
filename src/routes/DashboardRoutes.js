import {
    Routes, Route,
    Navigate
} from 'react-router-dom';
import { Home } from '../components/Home';
import {NavBar} from '../components/NavBar';
import { RegistroMovies } from '../components/RegistroMovies';

export const DashboardRoutes = () => {
    return (
        <>
            <div>
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/registro-peliculas" element={<RegistroMovies />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    )
}