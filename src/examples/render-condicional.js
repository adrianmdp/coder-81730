const name = "Adrián"
const num = 123
const email = null
const phone = undefined

useEffect(() => {


    if (name && "Adrián" && 123) {
        console.log("entra en if");

    } else {
        console.log("entra en else");
    }

    // false, undefined, NaN, unknow, 0, null, ""

    console.log(email || phone || name || "Adrián" || "Hola mundo");
}, [])

/* JSX
    Hola {name || "anónimo"}
*/