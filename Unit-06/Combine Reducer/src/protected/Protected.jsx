import React from "react";
import { Navigate,useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export const ProtectedNode=({children})=>{
    let location=useLocation()
    let state=useSelector((state)=>state.login.data)
   if(state.authState)
   {
       return children
   }
   else
   {
       return <Navigate to="/login" state={location.pathname} replace />
   }
}