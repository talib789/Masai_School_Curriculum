import './App.css';
import {Navbar} from "./components/navbar";
import {Button} from "./components/button"
import {Display} from "./components/display"
import {AuthContext} from './components/contexts/authcontext';
import {useContext} from "react"

function App() {
  const {isAuth,toggleAuth} = useContext(AuthContext)
  return (
    <div className="App">
      <Navbar width={"98%"} height={"40px"} border={"1px solid"}>
        <Button
        onClick={()=>{
          toggleAuth()
        }}
        color={"white"}
        bgcolor={"rgb(36,144,254)"}
        border={"0px"}
        >{isAuth === false ? "Login" : "Logout"}
        </Button>
      </Navbar>
      {isAuth === false ? "": <Display/>}
    </div>
  );
}

export default App;
