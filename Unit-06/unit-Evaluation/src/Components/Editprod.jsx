import { useParams, useNavigate,Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
export const EditProd=()=>{
    const [Productitem, setProductitem] = useState({});
    console.log(Productitem)
    const {id} = useParams();
    const navigate = useNavigate();
    const [title, settitle] = useState();
    const [brand, setbrand] = useState();
    const [cat, setcat] = useState();
    const getProductitem = () => {  
        fetch(`http://localhost:3002/products/${id}`)
        .then((res) => res.json())
        .then((res) => setProductitem(res))
   }
   const handleSubmit=()=>{    
    Productitem.title = title;
    Productitem.brand = brand;
    Productitem.category = cat;
       axios
            .patch(`http://localhost:3002/products/${id}`, Productitem, 'Content-Type": "application/json')
            .then(()=>{
               
                navigate("/")
            })
   }
   useEffect(() => {
      getProductitem();
   }, []);
   return (
    <div className="editSec">
     <div>
            <input type="text"  onChange={(e)=>settitle(e.target.value)} value={Productitem.title} />
            <input type="text" onChange={(e)=>setbrand(e.target.value)} value={Productitem.brand} />
            <input type="text" onChange={(e)=>setcat(e.target.value)}  value={Productitem.category} />
     </div>
<div>
<button onClick={()=>handleSubmit()}>Submit edit </button>
</div>
</div>
   );

   
}