import React from "react";
import { AuthContext } from "../context/AuthContext";
import {useNavigate} from "react-router-dom";

const Login = ({ loginUser }) => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { handleAuth } = React.useContext(AuthContext);
  const home = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if(email === 'eve.holt@reqres.in' && password === 'cityslicka'){
       handleAuth()
      home('/home');
    }
  }

  return (
    <div>
      <label>
        Email : 
        <input
          data-cy="login-email"
          type="email"
          value={email}
          onChange={(event) => setEmail(event.target.value)}
        />
      </label>
      <br />
      <label>
        Password
        <input
          data-cy="login-password"
          type="text"
          value={password}
          onChange={(event) => setPassword(event.target.value)}
        />
      </label>
      <br />
      <button data-cy="login-submit" onClick={handleSubmit}>
        Login
      </button>
    </div>
  );
};

 export default Login;


// import React, { useState, useContext } from "react";
// import { AuthContext } from "../context/AuthContext";

// const Login = () => {

//   const [username,setUsername] = React.useState('')
//     const [password,setPassword] = React.useState('')

//     const {isAuth,toggleAuth,flag,toggel} = React.useContext(AuthContext)
    

//     const handelClick = () => {

//         if(flag){
//             isAuth(false,'')
//             toggleAuth()
//             return
//         }

//         const temp = {
//             email:username,
//             password:password
//         }

//         let data

//         fetch(`https://reqres.in/api/login`,{
//             method:"POST",
//             body:JSON.stringify(temp),
//             headers:{
//                 "Content-Type": "application/json"
//             }
//         }).then((res) => res.json())
//         .then((res) => data = res)
        
//         setTimeout(()=>{
//             // console.log(data.token? true:false,'data')
            
//             // data.token ? isAuth(true,data.token):isAuth(false,'')
//             if(data.token){
//                 isAuth(data.token)
//                 toggleAuth()
//             }
            

//         },1000)
        
//     }

//   return (
//     <div>
//       <input data-cy="login-email" placeholder='Enter Username' value={username} onChange={(event) => setUsername(event.target.value)}/>
//       <input data-cy="login-password" placeholder='Enter Password' value={password} onChange={(event) => setPassword(event.target.value)}/>
//       <button data-cy="login-submit" onClick={handelClick}>Login</button>
//     </div>
//   );
// };

// export default Login;