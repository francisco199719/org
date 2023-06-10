import { useState } from 'react';
import { v4 as uuid } from 'uuid'

import './App.css';

import Header from './componentes/Header/Header.js'; //Agregando
import Formulario from './componentes/Formulario/Formulario.js';

import MiOrg from './componentes/MiOrg';
import Equipo from './componentes/Equipo';
import Footer from './componentes/Footer';

function App() {

  //hooks
  const [mostrarFormulario, actualizaMostrar] = useState(false)
  const [colaboradores, actualizarColaboradores] = useState([
    
    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://avatars.githubusercontent.com/u/31634536?v=4",
      nombre: "Francisco Lopez ",
      puesto: "Desarrollador de Software",
      fav: true
    },

    {
      id:uuid(),
      equipo: "Programación",
      foto: "https://scontent.ftru2-1.fna.fbcdn.net/v/t1.18169-9/16640777_1260866710665003_6458606244963006376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGX38CNox504qb6sBtRLLn1BimRrRCn8osGKZGtEKfyi_ILhZskDdcTTqWv5K28dLEyqdTAotZtpPg0jTT2JQdK&_nc_ohc=X1S_iTCswgoAX-kB4-3&_nc_ht=scontent.ftru2-1.fna&oh=00_AfC0rj1SqUfgHjSGjdosZtsJDiJ7FzETGnaveKib89ylCg&oe=64AAD04A",
      nombre: "Alessandra Araujo ",
      puesto: "Instructora",
      av: false
    },

    {
      id:uuid(),
      equipo: "Frond End",
      foto: "https://scontent.ftru2-1.fna.fbcdn.net/v/t1.18169-9/16640777_1260866710665003_6458606244963006376_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGX38CNox504qb6sBtRLLn1BimRrRCn8osGKZGtEKfyi_ILhZskDdcTTqWv5K28dLEyqdTAotZtpPg0jTT2JQdK&_nc_ohc=X1S_iTCswgoAX-kB4-3&_nc_ht=scontent.ftru2-1.fna&oh=00_AfC0rj1SqUfgHjSGjdosZtsJDiJ7FzETGnaveKib89ylCg&oe=64AAD04A",
      nombre: "Alessandra Araujo ",
      puesto: "Instructora",
      av: false
    },

    {
      id:uuid(),
      equipo: "UX y Diseño",
      foto: "https://scontent.ftru2-2.fna.fbcdn.net/v/t1.6435-9/61399095_2215778145173850_4269009557340028928_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=174925&_nc_eui2=AeFNVDPawQtDC82UnDWM45XU3f70vAa8Swvd_vS8BrxLC_Wd3gVlgWHV4tELc-IzG79Xn0ngnr_lpt1O6uEfaWhX&_nc_ohc=o7CEFJONIpwAX8syxxN&_nc_ht=scontent.ftru2-2.fna&oh=00_AfB7yiV-m61T2bTZdr-xL9DwAaWS6dbs8ZI7S0f4BXE3BA&oe=64AB2321",
      nombre: "Alessandra ",
      puesto: "Diseñadora",
      av: false
    },

    // {
    //   id:uuid(),
    //   equipo: "Programación",
    //   foto: "https://scontent.ftru2-3.fna.fbcdn.net/v/t31.18172-8/11872076_887273728006102_419478204242816015_o.jpg?_nc_cat=106&ccb=1-7&_nc_sid=174925&_nc_eui2=AeGJ3WAFyKpDc6692N-SqX_xUlNnEPi0ry9SU2cQ-LSvL7v9-E4zGEaY38q8z1XJpTkGxiGkZgeJWZPYFfPLlpTw&_nc_ohc=hJacJ2Wj7E4AX_Pw-MR&_nc_ht=scontent.ftru2-3.fna&oh=00_AfDu1BlxIkCnQWgeSigkGugff5JZfZXICxTf89YGZZCRaw&oe=64AB542D",
    //   nombre: "Debora Lezama",
    //   puesto: "Diseñadora",
    //   av: false
    // }


  ])

  //Lista de Equipo
  const [equipos, actualizarEquipos] = useState([
    {
      id:uuid(),
      titulo: "Programación",
      colorPrimario: "#57C278",
      colorSecundario: "#D9F7E9"
    },

    {
      id:uuid(),
      titulo: "Frond End",
      colorPrimario: "#82CFFA",
      colorSecundario: "#E8F8FF"
    },

    {
      id:uuid(),
      id:uuid(),
      titulo: "Data Science",
      colorPrimario: "#A6D157",
      colorSecundario: "#F0F8E2"
    },

    {
      id:uuid(),
      titulo: "Devops",
      colorPrimario: "#E06B69",
      colorSecundario: "#FDE7E8"
    },

    {
      id:uuid(),
      titulo: "UX y Diseño",
      colorPrimario: "#DB6EBF",
      colorSecundario: "#FAE9F5"
    },

    {
      id:uuid(),
      titulo: "Móvil",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFF5D9"
    },

    {
      id:uuid(),
      titulo: "Innovación y Gestión",
      colorPrimario: "#FFBA05",
      colorSecundario: "#FFEEDF"
    },

  ])

  //CAMBIAR ESTADO DE FORMULARIO
  const cambiarMostrar = () => {
    actualizaMostrar(!mostrarFormulario)
  }

  //Registrar Colaborador
  const registrarColaborador = (colaborador) => {
    console.log("Nuevo Colaborador", colaborador)
    //Spread operator: ...colaboradores lo que hace es copiar lo que ya existe en colaboradores y agrega los nuevos colaboradores
    actualizarColaboradores([...colaboradores, colaborador])
  }


  //Eliminar Colalborador
  const eliminarColaborador = (id) =>{
    console.log("Eliminar colaborador", id)
    //filter() regresa un nuevo arreglor sin modificar el original
    const nuevosColaboradores = colaboradores.filter((colaborador) => colaborador.id != id)
    actualizarColaboradores(nuevosColaboradores)
  }


  //ACTUALIZAR COLOR DE FONDO DE EQUIPO
  // los paramatros seria el color y a que equipo lo vamos a cambiar
  const actualizarColor = (color, id) =>{
    console.log("Actualizar color: ", color, id)

    const equiposColorActualizados = equipos.map( (equipo) => {
        if(equipo.id === id){
          equipo.colorPrimario = color
        }
        return equipo
    })
    actualizarEquipos(equiposColorActualizados)

  }

  //CREAR EQUIPOS
  const crearEquipo = (nuevoEquipo) => {
    console.log(nuevoEquipo)
    //Spread operator: ...equipos lo que hace es copiar lo que ya existe en equipos y agrega los nuevos equipos
    actualizarEquipos([...equipos, {...nuevoEquipo, id: uuid}])
  }

  const like = (id) => {
    console.log("like: ", id)
    const colaboradoresActualizados = colaboradores.map((colaborador) => {
      if (colaborador.id ===id){
        colaborador.fav = !colaborador.fav
      }
      return colaborador
    })

    actualizarColaboradores(colaboradoresActualizados)

  }


  const equi = equipos.map ( (equipo) => equipo.titulo )


  //Ternario --> condicion ? seMuestra : noSeMuestra
  //condicion && seMuestra
  return (
    <div className="App">
      
      {/* { Header() }
      <Header></Header>  FORMAS DE LLEMAR A UN COMPONENTE*/}
      <Header />


      {/* { mostrarFormulario === true ?  <Formulario/> : <></>} */}
      {
        mostrarFormulario && 
        <Formulario 
          equipos = { equi }
          registrarColaborador = {registrarColaborador}
          crearEquipo = {crearEquipo}
        />
      }


      <MiOrg cambiarMostrar={cambiarMostrar} />

      {/* ESTE CODIGO ES PARA LA INFORMACION DE LOS EQUIPOS HACIA LOS SECTIONS DONDE SE MOSTRARA EL TITULO, 
      COLOR PRIMARIO Y SECUNDARIO DEL FONDO DE LOS EQUIPOS EN LA PAGINA*/}
      {
        equipos.map ( (equipo) => <Equipo 
          datos={equipo} 
          key={equipo.titulo} 
          colaboradores={colaboradores.filter( colaborador => colaborador.equipo === equipo.titulo ) } 
          eliminarColaborador = {eliminarColaborador} 
          actualizarColor = {actualizarColor}
          like = {like}      
        />)
      }

      <Footer/>

    </div>
  );
}

export default App;
