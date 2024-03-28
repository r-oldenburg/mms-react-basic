import { Navigate, Outlet } from 'react-router-dom'

export const ProtectRender = ({user}: {user:any}) => {

    if (!user?.username) {
        console.log("No login");
        return <Navigate to="/login" replace={true}></Navigate>;
    }

    return (
        <Outlet></Outlet>
    )
}
