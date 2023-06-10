import "./Colaborador.css"
import {AiFillCloseCircle, AiOutlineHeart, AiFillHeart} from "react-icons/ai" //para importar icons desde React

const Colaborador = (props) =>{

    const {nombre, puesto, foto, equipo, id, fav} = props.datos
    const {colorPrimario, eliminarColaborador, like} = props


    //Operador Ternarios 
    //condicion ? Lo que es verdadero : lo que es falso
    return <div className="colaborador">
        {/* si no creamos un around Fuctions en el evento onClick se eliminara todos los colaboradores al actualziar la pagina */}
        <AiFillCloseCircle className="eliminar" onClick={() => eliminarColaborador(id)} />
        <div className="encabezado" style={{backgroundColor: colorPrimario}}>
            <img src= {foto} alt={nombre}/>
        </div>

        <div className="info">
            <h4>{nombre}</h4>
            <h5>{puesto}</h5>
            
            {fav ? <AiFillHeart color= "red" onClick={() => like(id)} /> : <AiOutlineHeart onClick={() => like(id)} />}
            
            
        </div>

    </div>
}

export default Colaborador