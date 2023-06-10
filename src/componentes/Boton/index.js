import "./Boton.css"

const Boton = (props) => {
    return <button className="boton">
        {props.children}

        {/*  props.children lo que hacer es asignare el elemento hijo que se encuentra en 
              formulario.js  en la parte de <boton> Crear </boton>, en este caso Crear seria el elemento hijo que seleccionaria
              props.children
        */}

    </button>
}

export default Boton