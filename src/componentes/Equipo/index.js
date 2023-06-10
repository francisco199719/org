import "./Equipo.css"
import Colaborador from "../Colaborador"

//IMPORTANDO LIBRERIA PARA OPACIDAD
import hexToRgba from 'hex-to-rgba'

const Equipo = (props) => {

    //Destructuracion
    const { colorPrimario, colorSecundario, titulo, id } = props.datos

    //props que vienen de App.js
    const { colaboradores, eliminarColaborador, actualizarColor, like } = props

    const obj = {
        //usando hexToRgba pasamos el color y la opacidad
        backgroundColor: hexToRgba(colorPrimario, 0.6)
    }

    const estiloTitulo = { borderColor: colorPrimario }

    //console.log(colaboradores)


    //COMO COLABORADOR ES UN ARREGLO DECLARADO EN APP.JS MEDIANTE UN HOOKS, PUEDE TENER UN TAMAÑO POR ELLO ES USAREMOS colaboradores.length COMO
    //UNA CONDICION PARA MOSTRAR AQUELLOS CONTENEDORES QUE TIENEN ALGUN COLABORADOR EN EL, CASO CONTRARIO SE OCULTARAN HASTA QUE SE REGISTRE ALGUN 
    //COLABORADOR
    return <> 
    {
            colaboradores.length > 0 &&
            <section className="equipo" style={obj}>
                
                {/* Cuando intentamos cambiar el value de un input tiene que ir el evento onChange */}
                <input
                    type="color"
                    className="input-color"
                    value={colorPrimario}
                    onChange={(evento) => {
                        actualizarColor(evento.target.value, id)
                    }}                
                
                />
                
                <h3 style={estiloTitulo}>
                    {titulo}
                </h3>

                <div className="colaboradores">
                    {
                        colaboradores.map((colaborador, index) => 
                        <Colaborador 
                                datos={colaborador}
                                key={index}
                                colorPrimario={colorPrimario} 
                                eliminarColaborador = {eliminarColaborador}
                                like = {like}
                        />)
                    }

                </div>
            </section>
    }</>
}

export default Equipo