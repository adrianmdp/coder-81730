import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

const Login = () => {

    const authContext = useContext(AuthContext)

    return (
        <>
            <h1>Login</h1>

            { `${authContext.user.email} ${authContext.prueba}` } 
        </>
    )

}

export default Login