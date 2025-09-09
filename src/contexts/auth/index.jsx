import { createContext, useState } from "react";

const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const [user, setUser] = useState({name: "Adrian", email: "asd@asd.com"})

    const [prueba, setPrueba] = useState("Esto es una prueba")

    const login = () => {

        console.log("Acá puedo gestionar mi login");
        

    }

  return (
    <AuthContext.Provider value={ { user, login, prueba } }>
      {children}
    </AuthContext.Provider>
  )
}

export { AuthContext, AuthProvider }