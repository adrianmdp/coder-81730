import { useRef } from "react"

const TextField = ({ name, type, id, label, value }) => {

    const inputRef = useRef(null) // Esto solo es a modo de ejemplo, no es correcto en un componente de presentación

    // inputRef.current

    return (
        <>
            <label htmlFor={id}>
                {label}
            </label>
            <input ref={inputRef} name={name} type={type} id={id} value={value} />
        </>

    )
    
}

export default TextField