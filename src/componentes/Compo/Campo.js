import { useState } from "react"

import "./Campo.css"

const Campo = (props) => { //props es un objeto por ende podemos entrar a sus propiedades
        
    /* CONTROLAR EL ACCESO DE DATOS AL IMPUT - OnChange */
    //console.log("Datos: ", props)
    const manejarCambio = (e) =>{
        //console.log("cambio", e)
        //console.log("cambio", e.target.value)
        props.actualizarValor(e.target.value) //estos datos llegan desde formulario.js  de -> const [nombre, actualizarNombre] = useState("")
    }


    //Destructuracion nos da la ventaja de asignar un valor por defecto a type en este caso "text"
    const {type = "text"} = props
    //console.log(type)


    const placeholderModificado = `${props.placeholder}...`
    return <div className={ `campo  campo-${type}`}>
        {/* podemos agregar a props.titulo que es una cadena de texto propiedades como: .toUpperCase() */}
        <label>{props.titulo}</label> 
        <input 
            placeholder={placeholderModificado} 
            required={props.required} 
            value ={props.valor} //asignamos el valor de las propos que vienen de formulario.js
            onChange={manejarCambio} //Funcion de cambio
            type = {type}
        />
    </div>
}

export default Campo