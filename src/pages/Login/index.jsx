import { useContext } from "react"
import { AuthContext } from "../../contexts/auth"

const Login = () => {

    const authContext = useContext(AuthContext)

    return (
        <>
            <h2>Login</h2>

            { `${authContext.user.email} ${authContext.prueba}` } 

            <form action="">
                <label htmlFor="">User</label>
                <input type="email" />

                <label htmlFor="">Password</label>
                <input type="password" />
            </form>
        </>
    )

}

export default Login