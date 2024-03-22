import RefForm from "@/components/Forms/RefForm"
import LoginForm from "../components/Forms/LoginForm"

const Login = () => {
    return (
        <div>
            <h3>State Form</h3>
            <LoginForm />
            <h3>Ref Form</h3>
            <RefForm />
        </div>
    )
}

export default Login
