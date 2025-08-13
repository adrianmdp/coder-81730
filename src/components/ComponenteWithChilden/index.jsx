const ComponenteWithChildren = ({ children, id, className }) => {

    return (
        <div id={id} className={className}>
            <h2>Este es el título del componente</h2>

            {children}
        </div>
    )

}

export default ComponenteWithChildren