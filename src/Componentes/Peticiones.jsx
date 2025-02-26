import { useEffect, useState } from "react"

export const Peticiones = () => {

    const [usuarios, setUsuarios] = useState([])

    const obtenerDatos = async () => {
        let respuesta = await fetch("https://dummyjson.com/users")
        let datos = await respuesta.json()
        setUsuarios(datos.users)
    }
    useEffect(() => {
        obtenerDatos()
    }, [])
    if (usuarios.length == 0) {
        return <h1>Cargando...</h1>
    }
    console.log(usuarios)
    return <>
        <h1>Usuarios:</h1>
        <div>
            {usuarios.map((element, index) => {
                return <div key={index}>
                    <h3>Nombre: {element.firstName}</h3>
                    <h3>Edad: {element.age}</h3>
                    <h4>{element.age < 30 ? "Menor de 30 años" : "Mayor de 30 años"}</h4>
                </div>
            })}
        </div>
    </>
}