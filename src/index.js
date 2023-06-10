import React from 'react';//LIBRERIA QUE NOS AYUDA A HACER INTERFACES GRAFICAS
import ReactDOM from 'react-dom/client'; //NOS AYUDA A TRABAJAR CON REACT Y CON EL DOM DEL NAVEGADOR
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
