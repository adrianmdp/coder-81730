const Modal = ({title, description, cancelAction, confirmAction}) => {

    return (

        <div>
            <h2>{title}</h2>
            <p>
                {description}
            </p>
            <footer>
                <button onClick={cancelAction}>Cancelar</button>
                <button onClick={confirmAction}>Aceptar</button>
            </footer>
        </div>

    )

}

export default Modal