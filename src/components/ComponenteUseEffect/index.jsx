import { useEffect, useState } from "react"

const ComponenteUseEffect = () => {

    const [text, setText] = useState(undefined)

    const [num, setNum] = useState(Math.random())

    const [buscador, setBuscador] = useState("")
    const [categorias, setCategorias] = useState([])
    const [precios, setPrecios] = useState(0)

    // useEffect(función, arrayDeDependencias)

    console.log('estoy fuera de useEffect')

    useEffect(() => {

        console.log('estoy dentro de useEffect con array de dependencias vacío');
        
    }, [num, text])

    const cambiarEstado1 = () => {
        setText("Ahora tengo texto!")
    }

    const cambiarEstado2 = () => {
        setNum(Math.random())
    }

    useEffect(() => {
        
        // Va a la api a buscar productos usando 
        // fetch('http://miapi.com?s={buscador}&price={precio}&categorias={categorias})

    }, [buscador, precios, categorias])

    return (
        <>
            <h2>
                Este es mi componente con ejemplos de useEffect
            </h2>

            <p>
                Text: {text}
            </p>

            <p>
                Num: {num}
            </p>

            <button onClick={cambiarEstado1}>Cambiar estado 1</button>
            <button onClick={cambiarEstado2}>Cambiar estado 2</button>

            { /* Acá tengo un listado de prductos */ }

            <input onChange={e => setBuscador(e.target.value)} />
            <input type="checkbox" onChange="" />
            <input type="checkbox" onChange="" />
            <input onChange={e => setPrecios(e.target.value)} />
        
            { /* Tengo además un buscador, un filtro de cateogrías y un filtro de precios */ }
        </>
    )

}

export default ComponenteUseEffect