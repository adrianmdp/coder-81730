const a = new Promise((resolve, reject) => {

    // Acá voy a realizar la operación que necesite (una división)
    // pero prometo algo que puede llegar a fallar (si dividen por 0, falla)

    // En caso de éxito
    resolve(/* devuelvo lo que ecesite */)

    // en caso de error
    reject("Hubo un error al ejecutar la operación.")

})

a
    .then(resp => {/* Hacemos lo que sea necesario */})
    .catch(err => { /* Hacemos lo que sea necesario para no romper la aplicación */ })
    .finally(() => { /* esto va a pasar tanto si hubo éxito como si hubo error */})