import { useState } from "react"

import "./MiOrg.css"

const MiOrg = (props) => {

    //Estado - hooks: funcionalidades que nos ayudan a trabajar con el comportamiento de React
    //Funcionalidades:
    //useState - primera funcion de react
    //se Declara: useState()
    //const [nombreDeLaVariable, funcionActualiza] = useState(valorInicial)
    
    
    // const [mostrar, actualizaMostrar] = useState(true)
    // const manejarClick = () =>{
    //     console.log("Mostrar/Ocultar Elemento", !mostrar)
    //     actualizaMostrar(!mostrar)
    // }

    //console.log(props)

    return <section className="orgSection">
        <h3 className="title">Mi Organización</h3>
        <img src="/img/add.png" alt="add" onClick={props.cambiarMostrar}/>
    </section>
}

export default MiOrg