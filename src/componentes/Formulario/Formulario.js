import { useState } from "react"

import "./Formulario.css"
import Campo from "../Compo/Campo.js"
import ListaOpciones from "../ListaOpciones/ListaOpciones.js"
import Boton from "../Boton"

// Si queremos ahorranos lineas de texto al importar, debido a la estructura de carpetas de react, podemos cambiar el nombre del archivo que esta
// dentro de la carpeta CampoTexto por index.js y de esta manela el codigo de importacion seria el siguiente:
//import CampoTexto from "../CompoTexto"

const Formulario = (props) =>{

    const [nombre, actualizarNombre] = useState("")
    const [puesto, actualizarPuesto] = useState("")
    const [foto, actualizarFoto] = useState("")
    const [equipo, actualizarEquipo] = useState("")

    const [titulo, actualizarTitulo] = useState("")
    const [color, actualizarColorEq] = useState("")

    const { registrarColaborador, crearEquipo } = props

    //CONTROLA EL COMPORTAMIENTO DEL BOTON CREAR
    const manejarEnvio = (e) =>{
        e.preventDefault();
        console.log("Manejar envio")
        
        let datosAEnviar = {
            nombre: nombre,
            puesto: puesto,
            foto: foto,
            equipo: equipo
        }
        registrarColaborador(datosAEnviar)
    }

    const manjearNuevoEquipo = (e) =>{
        e.preventDefault();
        //crearEquipo({titulo: titulo, color: color}) titulo y color que estan a la derecha representan las variables de las usestate
        crearEquipo({titulo, colorPrimario: color})
    }

    return <section className="formulario">
        <form onSubmit={manejarEnvio}>
            <h2>Rellena el formulario para crear el colaborador.</h2>
            <Campo 
                titulo="Nombre" 
                placeholder="Ingresar Nombre" 
                required = {true} 
                valor={nombre} 
                actualizarValor={actualizarNombre} 
            />
            <Campo
                titulo="Puesto" 
                placeholder="Ingresar Puesto" 
                required
                valor={puesto} 
                actualizarValor={actualizarPuesto}
            />
            <Campo
                titulo= "Foto" 
                placeholder="Ingresar enlace de Foto" 
                required={true}
                valor={foto} 
                actualizarValor={actualizarFoto}
            />
            
            <ListaOpciones 
                titulo = "Equipos"
                valor={equipo}
                actualizarEquipo = {actualizarEquipo}
                equipos = {props.equipos}
            />

            <Boton>
                {/* de esta forma debemos agregar el index.js de Boton a props el .children  */}
                Crear
            </Boton>
        </form>

        <form onSubmit={manjearNuevoEquipo}>
            <h2>Rellena el formulario para crear el Equipo.</h2>
            <Campo
                titulo="Titulo" 
                placeholder="Ingresar Titulo" 
                required = {true} 
                valor={titulo} 
                actualizarValor={actualizarTitulo} 
            />
            <Campo 
                titulo="Color" 
                placeholder="Ingresar el color en Hex" 
                required
                valor={color} 
                actualizarValor={actualizarColorEq}
                type = "color"
            />
            {/* de esta forma debemos agregar el index.js de Boton a props el .children  */}
            <Boton> Registrar Equipo </Boton>    
        </form>
    </section>
}

//el evento del formulario onSubmit para que la pagina no se recargue cada que precionamos el boton de enviar
export default Formulario

