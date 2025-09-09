import { services } from "../../services"

const AddUsers = () => {

    const handleAddUser = (event) => {

        event.preventDefault()
        services.users.add(elem)
    }

    return (

        <div>
            <h2>Agregar usuarios</h2>

            Acá iría el formulario
            <form onSubmit={handleAddUser}>
                <input type="text" name="name" />
                <input type="file" name="image" />
                <button type="submit">Agregar</button>
            </form>
        </div>

    )

}

export default AddUsers