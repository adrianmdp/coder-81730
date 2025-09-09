import { useEffect, useState } from "react"

const ComponenteA = ({ shareValue }) => {

    const [value, setValue] = useState()

    useEffect(() => {
        
        if(value) {
            shareValue(value)
        }
    }, [value])

    return (
        <div>
            <h2>Componente A</h2>
            <button onClick={() => setValue("Hola, soy Adrián")}>Cambiar Value</button>
            <br />
            {value}
        </div>
    )
    
}

export default ComponenteA