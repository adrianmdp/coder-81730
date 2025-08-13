import { useEffect, useState } from "react"

const Users = () => {

    // Necesitamos 2 estados de usuarios, uno que se mantenga con los datos originales
    // y otro que lo usamos para mostrar en pantalla con o sin filtro (usersToSHow)
    const [users, setUsers] = useState([])
    const [usersToShow, setUsersToShow] = useState()
    const [albums, setAlbums] = useState([])

    const getUsers = async () => {
        const resp = await fetch('https://jsonplaceholder.typicode.com/users')

        if (resp.ok) {
            const data = await resp.json()
            setUsers(data)
        } else {
            // Acá tenemos oportunidad de hacer algo en el caso de que el ok venga en false
        }
    }

    const getAlbums = async (userId) => {
        const resp = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)

        if (resp.ok) {
            const data = await resp.json()
            setAlbums(data)
        } else {
            // Acá tenemos oportunidad de hacer algo en el caso de que el ok venga en false
        }
    }

    useEffect(() => {
        getUsers()
    }, [])

    // Agregué este useEffect para que usersToShow se actualice siempre que haya cambios en users 
    // En nuestro código esto sólo pasa una vez pero podría darse en otros casos.
    useEffect(() => {
        setUsersToShow(users)
    }, [users])


    // Resuelvo la busqueda con expresión regular y 
    // agregué la posibilidad de buscar por name, username
    // website y email
    const search = (event) => {

        const searchTerm = event.target.value;
        const regex = new RegExp(searchTerm, 'i'); // 'i' ignora mayúsculas/minúsculas

        const newUsers = users.filter(user =>
            regex.test(user.name) ||
            regex.test(user.username) ||
            regex.test(user.website) ||
            regex.test(user.email));

        setUsersToShow(newUsers);

    }

    return (
        <div>
            <label htmlFor="search">Buscar</label>
            <input type="text" name="search" id="search" onChange={search} />
            <table border={1}>
                <thead>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Website</th>
                    <th>Actions</th>
                </thead>
                <tbody>
                    {usersToShow.map(user => {
                        return (
                            <>
                                <tr>
                                    <td>{user.id}</td>
                                    <td>{user.name}</td>
                                    <td>{user.email}</td>
                                    <td>{user.phone}</td>
                                    <td>{user.website}</td>
                                    <td>
                                        <button onClick={() => getAlbums(user.id)}>Ver albums</button>
                                    </td>
                                </tr>
                                {albums.length > 0 && user.id === albums[0].userId && albums.map(album => {
                                    return (
                                        <tr>
                                            <td>{album.id}</td>
                                            <td colSpan={5}>{album.title}</td>
                                        </tr>
                                    )
                                })}
                            </>
                        )
                    })}

                </tbody>
            </table>

        </div>
    )

}

export default Users