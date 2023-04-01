import './App.css';
import torben from './imagenes/torben.png';
import ListaDeTareas from './componentes/ListaDeTareas';

function App() {
  return (
    <div className='aplicacion-tareas'>
      <div className='torben-logo-contenedor'>
        <img 
          src= {torben} 
          className='torben-logo' />
      </div>   
      <div className='tareas-lista-principal'>
        <h1>Mis Tareas</h1>
        <ListaDeTareas />
      </div> 
    </div>
  );
}

export default App;
