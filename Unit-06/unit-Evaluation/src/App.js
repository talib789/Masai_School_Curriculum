
import './App.css';
import { Route,Routes } from 'react-router-dom';
import { Login } from './Components/Login';
import { Createprod } from './Components/Createprod';
import { Navbar } from './Components/Navbar';
import { HomePage } from './Components/HomePage';
import { DetailsProd } from './Components/DetailsProd';
import { EditProd } from './Components/Editprod';
function App() {
  return (
    <div className="App">
      <Navbar/>
     <Routes>
     <Route path="/" element={<HomePage/>}></Route>
      <Route path="/Login" element={<Login/>}></Route>
      <Route path="/detailsproduct/:id" element={<DetailsProd/>}></Route>
      <Route path="/createproduct" element={<Createprod/>}></Route>
      <Route path="/editproduct" element={<EditProd/>}></Route>
     </Routes>
    </div>
  );
}

export default App;
