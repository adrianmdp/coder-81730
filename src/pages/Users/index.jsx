import { useEffect, useState } from "react"
import { services } from "../../services"



const Users = () => {

    const [users, setUsers] = useState([])

    useEffect(() => {
        
        services.users.getAll()
            .then(data => setUsers(data));
    }, [])

    if(!users) return 'cargando...'

    return (
        <div>
            <h2>Usuarios</h2>

            {
                users.length > 0 && users.map(user => {
                    return (
                        <>
                            <ul>
                                <li>{ user.name }</li>
                                <li>{ user.email }</li>
                                <li>{ user.isAdmin ? "Administrador" : "Usuario"}</li>
                                <li><img src={ user.image } alt="" width={200} /></li>
                                <li>{ user.id }</li>
                            </ul>
                            <hr />
                        </>
                    )
                })
            }
        </div>
    )

}

export default Users