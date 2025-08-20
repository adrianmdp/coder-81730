import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Albums = () => {

    const [albums, setAlbums] = useState([])

    const { userId } = useParams()

    useEffect(() => {
        const resp = fetch(`https://jsonplaceholder.typicode.com/users/${userId}/albums`)
            .then(resp => resp.json())
            .then(data => setAlbums(data))
    }, [])

    return (

        <>
            <h1>Albums</h1>
            <table>
                <tbody>
                    {albums.length > 0 && albums.map(album => {
                        return (
                            <tr>
                                <td>{album.id}</td>
                                <td colSpan={5}>{album.title}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </>


    )

}

export default Albums