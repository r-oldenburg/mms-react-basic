import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import MainLayout from '../layout/MainLayout'
import Homepage from '../pages/Homepage'
import { Users } from '../pages/Users'
import { AboutMe } from '../pages/AboutMe'
import { User } from '../pages/User'
import { LoginForm } from '../components/Forms/LoginForm'
import { FetchPage } from '../pages/FetchPage'
import { FetchListingPage } from '../pages/FetchListingPage'
import { BlogPage } from '../pages/BlogPage'
import { PropDrillPage } from '../pages/PropDrill'
import { ContextExcercise } from '../components/ContextExcercise'
import { Protect } from '../layout/Protect'
import { BlogService } from '../services/BlogService'

export const mainRouter = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout></MainLayout>} >
            <Route index element={<Homepage></Homepage>}></Route>

            <Route path='login' element={<LoginForm/>}></Route>
            <Route path='users'>
                <Route index element={<Users/>}></Route>
                <Route path=':id' element={<User />} />
            </Route>
            <Route path='aboutme' element={<AboutMe/>}></Route>
            <Route path='blog' element={<Protect/>}>
                <Route index  element={<BlogPage blogService={BlogService}/>} />
            </Route>
            <Route path='fetch' element={<FetchPage/>}></Route>
            <Route path='fetchlist' element={<FetchListingPage/>}></Route>
            <Route path='propdrill' element={<PropDrillPage/>}></Route>
            <Route path='context' element={<ContextExcercise/>}></Route>
            <Route path='*' element={<Homepage></Homepage>} ></Route>
        </Route>
    )
)