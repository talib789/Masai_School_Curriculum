import './App.css';
import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ToDoDetails } from "./components/ToDoDetails";
import { TodoInput } from "./components/ToDoInput";
import { ToDoList } from "./components/ToDoList";

function App() {
  return (
    <div className="App">
      <Navbar />
      <br />
      <br />
      <Routes>
        <Route path="/" element={<TodoInput />} />
        <Route path="/alltodos" element={<ToDoList />} />
        <Route path="/todo/:id" element={<ToDoDetails />} />
      </Routes>
    </div>
  );
}
