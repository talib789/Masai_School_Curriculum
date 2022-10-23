import { AuthContext } from "./contexts/authcontext"
import { useContext } from "react";

export const Display =()=>{
    const {isAuth} = useContext(AuthContext)
    return (
        <div>
            <h2>Login succesfull</h2>
            <p>token:{isAuth}</p>
        </div>
    )
}