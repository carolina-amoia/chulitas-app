import 'bootstrap/dist/css/bootstrap.min.css'
import { NavBar } from "./componentes/NavBar/NavBar";
import { ItemListContainer} from "./componentes/Container/ItemListContainer";

function App() {
  return (
    <>
     <NavBar/>
    
    <ItemListContainer titulo="Chulas Clothes" contenido="Preparate para comprarte todo" />
    </>
  );
}




export default App;
