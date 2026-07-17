import './App.css'
import MainLayout from "./MainLayout/MainLayout.tsx";
import MainPage from './components/MainPage/MainPage.tsx'
import {Route,Routes} from 'react-router';
import VacancyWithDescriptionPage from "./components/VacancyWithDescriptionPage/VacancyWithDescriptionPage.tsx";
import NotFoundPage from './components/NotFoundPage/NotFoundPage.tsx'


function App() {
    return (
        <Routes>
            <Route element={<MainLayout/>}>
                <Route path= '/vacancy/:city' element= {<MainPage />}/>
                <Route path='/jobs/:id' element={<VacancyWithDescriptionPage/>}/>
                <Route path='*' element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )
}

export default App