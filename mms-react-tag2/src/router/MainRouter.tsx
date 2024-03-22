import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import FetchPage from "../pages/FetchPage";
import BlogPage from "../pages/BlogPage";
import QueryPage from "../pages/QueryPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="fetch" element={<FetchPage />} />
            <Route path="blog">
                <Route index element={<BlogPage />} />
            </Route>

            <Route path="query" element={<QueryPage/>}/>
            <Route path="*" element={<h3>404</h3>}/>
        </Route>
    )
)