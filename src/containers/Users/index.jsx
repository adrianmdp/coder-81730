import users from './mock.json'

const Users = () => {

    return (

        <table border={1}>
            <tbody>
                {users.map(user => {
                    return (
                        <tr>
                            <td>{ user.nombre }</td>
                            <td>{ user.apellido }</td>
                            <td>{ user.dni }</td>
                            <td>{ user.direccion }</td>
                            <td>{ user.telefono }</td>
                            <td>{ user.imagen }</td>
                        </tr>
                    )
                })}
                
            </tbody>
        </table>

    )

}

export default Users