import { createBrowserRouter, createRoutesFromElements, Route } from 'react-router-dom';
import Homepage from '../pages/Homepage'
import AboutMe from '../pages/AboutMe'
import MainLayout from '../layouts/MainLayout';
import ErrorPage from '../components/ErrorPage';
import UserDetails from '../pages/UserDetails';
import Users from '../pages/Users'

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />} >
            <Route index element={<Homepage />} />
            <Route path="aboutme" element={<AboutMe />} />

            <Route path="users">
                <Route index element={<Users/>} />
                <Route path=":id" element={<UserDetails/>}/>
            </Route>

            <Route path="*" element={<ErrorPage />} />
        </Route>
    )
)

export default router