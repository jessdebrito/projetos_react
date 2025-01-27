import './App.css'

// Componente filho
import FunctionalComponent from './components/FunctionalComponent';
import ClassComponent from './components/ClassComponent';
import PropsExemple from './components/PropsExemple';

// Componente PAI
function App() {

  return (
    <>
     <h1> Hello World React</h1>
    
    {/* Utilizando o componente importado no JSX */}
     <FunctionalComponent />

     <ClassComponent />

     <PropsExemple nome="Matheus" idade={30} />
         
    </>
  )
}

export default App
