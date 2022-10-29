import React from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toggleAuth } from '../Redux/action';
export const Login = () => {
    const [email, setEmail] = React.useState("");
    const [password, setPassword] = React.useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const login = async(data) => {
        try {
            let res = await fetch (`https://reqres.in/api/login`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            });
            let data1 = await res.json();
            return data1;
        } catch (error) {
            console.log(error)
        }
    }
    const handleSubmit = (e)=>{
        e.preventDefault();
        let data = {
            email: email,
            password: password
        }
        login(data).then((res)=>{
            if(res.token){
                dispatch(toggleAuth());
                navigate('/');
            }
        });
    }
  return (
    <div>
        <form action="" onSubmit={handleSubmit}>
            <label >Email</label>
            <input type="text" placeholder='Email' value={email} onChange={(e)=>{setEmail(e.target.value)}}/><br /><br />
            <label>Password</label>
            <input type="password" placeholder='password' value={password} onChange={(e)=>{setPassword(e.target.value)}}/><br /><br />
            <input type="submit" value="Login"/>
        </form>
    </div>
  )
}
