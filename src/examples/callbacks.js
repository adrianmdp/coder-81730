const funcion1 = (callback) => {

    // code...

    callback({
        name: "Adrian",
        email: "asdasd@asd.com"
    }, 3000)

}

useEffect(() => {
    funcion1((saludo, value) => {
        console.log(saludo, value);
    })
}, [])

document.addEventListener('scroll', event => {

})