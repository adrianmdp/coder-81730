import { useContext, useState } from "react"
import ComponenteA from "../../components/ComponenteA"
import ComponenteB from "../../components/ComponenteB"
import Modal from "../../components/Modal"
import { AuthContext } from "../../contexts/auth"

const Home = () => {

    const [saludo, setSaludo] = useState()
    const authContext = useContext(AuthContext)

    const recibirDatoDesdeComponenteHijo = (value) => {
        setSaludo(value);
    }
    
    return (
        <>
            <h1>Home (Hola {authContext.user.name} )</h1>
            
            <hr />
            <ComponenteA shareValue={recibirDatoDesdeComponenteHijo} />
            <hr />
            <ComponenteB dato={saludo} />

            <button onClick={authContext.login}>Iniciar Sesión</button>

            <br />
            <Modal 
                title="Desea eliminar el item?" 
                description="Lorem Ipsum" 
                cancelAction={() => console.log("Cerrar modal")} 
                confirmAction={() => console.log("Eliminar del carro")} />
            <hr />
            <Modal 
                title="Desea cerrar la sesión" 
                description="Lorem Ipsum" 
                cancelAction={() => console.log("Cerrar modal")} 
                confirmAction={() => console.log("Cerrar sesión")} />
        </>
    )

}


export default Home