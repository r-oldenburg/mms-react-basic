import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout/>}>
            <Route index element={<Homepage/>}/>
            <Route path="login" element={<Login/>}/>
        </Route>
    )
)