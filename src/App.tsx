import './App.css'
import MainLayout from "./MainLayout/MainLayout.tsx";
import MainPage from './components/MainPage/MainPage.tsx'
import {Route,Routes, Navigate} from 'react-router-dom';
import VacancyWithDescriptionPage from "./components/VacancyWithDescriptionPage/VacancyWithDescriptionPage.tsx";
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx'
import AboutMe from './components/AboutMe/AboutMe.tsx'

function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path='/' element={<Navigate to='/vacancy/Москва' />}/>
                <Route path='vacancy'>
                    <Route path= ':city' element= {<MainPage />}/>
                    <Route path='jobs/:id' element={<VacancyWithDescriptionPage/>}/>
                </Route>
                <Route path='about' element={<AboutMe/>}/>
                <Route path='*' element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )
}

export default App