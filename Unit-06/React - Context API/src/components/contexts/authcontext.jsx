
import { createContext, useState} from "react";
import axios from "axios"

export const AuthContext = createContext(); // create empty box

export const AuthContextProvider = ({children})=>{
//connect app to box
const [isAuth,setisAuth] = useState(false);

const toggleAuth = async()=>{
    if(isAuth===false){
        axios.post("https://reqres.in/api/login",
        {
            email: "eve.holt@reqres.in",
            password: "cityslicka",
          })
          .then(function (response){
              console.log(response);
              setisAuth(response.data.token)
          });
    }
    else{
        setisAuth(()=>{
            return false
        })
    }

   }
   return (
       <AuthContext.Provider value={{isAuth,toggleAuth}}>{children}</AuthContext.Provider>
   )
}
