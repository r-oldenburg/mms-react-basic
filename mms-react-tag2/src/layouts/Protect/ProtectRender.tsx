
import { Navigate, Outlet } from 'react-router-dom'

const ProtectRender = ({ user }) => {

    if(!user?.loggedIn ){
        return <Navigate to={"/login"} replace/>
    }

    return <Outlet />
}

export default ProtectRender
