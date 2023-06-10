import "./ListaOpciones.css"

const ListaOpciones = (props) =>{

    //Metodo map para recorrer arreglos
    //Estructura de map:
    // map -> arreglo.map( (equipo, index) => {
    //  return <option> </option>
    // })


    // const equipos = [
    //     "Programación",
    //     "Front End",
    //     "Data Science",
    //     "Devops",
    //     "UX y Diseño",
    //     "Móvil",
    //     "Innovación y  Gestión"
    // ]


    const manejarCambio = (e) =>{
        console.log("cambio", e.target.value)
        props.actualizarEquipo(e.target.value)
    }

    return <div className="lista-opciones">
        <label>{props.titulo}</label>
        
        {/* el valule sirve para modificar el comportamiento del select, cuando inspeccionamos el componente ListaOpciones 
        y al componente papá que es formulario nos damos cuenta que toma el valor que seleccionamos, lo que significa
         que estamos enviando los datos a esos componentes*/}
        <select value={props.valor} onChange={manejarCambio}> 
            
            {/* Las llaves le dicen a react que que lo interprete como un javascript*/}

            {/* {equipos.map( (equipo, index) => {
                return <option key={index}>{equipo}</option>
            } )} */ }

            <option value="" disabled  defaultValue= "" hidden>
                Seleccionar Equipo
            </option>
            
            {props.equipos.map((equipo, index) => <option key={index} value = {equipo}>{equipo}</option> )}

        </select>
    </div>
}

export default ListaOpciones