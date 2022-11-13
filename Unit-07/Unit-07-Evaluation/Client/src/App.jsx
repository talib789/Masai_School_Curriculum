import { Route, Routes } from 'react-router-dom';
import './App.css';
import Homepage from './Components/Homepage';
import Login from './Components/Login';
import Navbar from './Components/Navbar';
import Register from './Components/Register';
import Blogs from './Components/Blogs';


function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;