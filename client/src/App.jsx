import './assets/libs/boxicons-2.1.1/css/boxicons.min.css'
import './scss/App.scss'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Blank from './pages/Blank'
import Project from "./pages/project" 
import Event from "./pages/event"
import Training from "./pages/Trainings"
import Home from './pages/home'
import MainLayout from './layout/MainLayout'
import Dashboard from './pages/home'
import Edit from './pages/Edit'
import Profile from './pages/Profile'

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/login" element={<Blank />}/>                
                <Route exact path="/register" element={<Blank />}/>
                <Route path="/" element={<MainLayout />}>
                    <Route index element={<Home />} />
                    <Route exact path="me" element={<Profile />} />
                    <Route exact path="team" element={<Dashboard />} />
                    <Route exact path="projects" element={<Project />} />
                    <Route exact path="events" element={<Event />} />
                    <Route exact path="trainings" element={<Training />} />
                    <Route exact path="edit" element={<Edit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
