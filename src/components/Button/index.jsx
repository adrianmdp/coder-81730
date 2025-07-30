const Button = (props) => {

    const name = "CoderHouse"

    const { text, color, onClick } = props

    return (
        <button onClick={onClick} style={ { backgroundColor: color } }>
            { text }
        </button>
    )

}

export default Button