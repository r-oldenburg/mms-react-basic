import { Route, createBrowserRouter, createRoutesFromElements } from "react-router-dom";
import Homepage from "../pages/Homepage";
import MainLayout from "../layouts/MainLayout";
import Login from "../pages/Login";
import FetchPage from "../pages/FetchPage";
import BlogPage from "../pages/BlogPage";
import QueryPage from "../pages/QueryPage";
import PropDrill from "../pages/PropDrill";
import CustomHooks from "@/components/CustomHooks";
import Protect from "@/layouts/Protect";

export const router = createBrowserRouter(

    createRoutesFromElements(
        <Route path="/" element={<MainLayout />}>
            <Route index element={<Homepage />} />
            <Route path="login" element={<Login />} />
            <Route path="fetch" element={<FetchPage />} />

            <Route path="blog" element={<Protect />}>
                <Route index element={<BlogPage />} />
                <Route path=":id" element={<h3>single blog</h3>}/>
            </Route>

            <Route path="propdrill" element={<PropDrill />} />
            <Route path="query" element={<QueryPage />} />
            <Route path="hooks" element={<CustomHooks />} />
            <Route path="*" element={<h3>404</h3>} />
        </Route>
    )
)