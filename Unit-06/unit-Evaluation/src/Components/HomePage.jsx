import React from 'react'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
export const HomePage = () => {
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const navigate = useNavigate();
const [product,setProduct] = React.useState([])
const [error,setError] = React.useState(false);
console.log(product)
   const getData = ()=>{
    fetch(`http://localhost:3002/products`)
    .then((res)=>res.json())
    .then((res)=>setProduct(res))
   }
    React.useEffect(()=>{
        if(!isLoggedIn){
            navigate('/login');
        }
        else{
            getData();
        }
    },[isLoggedIn])
  return (
    <div style={{display:'grid', gridTemplateColumns:'repeat(5, 1fr)', gap:'20px'}}>
    {
        product?.map((data)=>{
            return <div style={{margin:"auto", width:'250px',padding:'10px'}} key={data.id}>
                <img width={'100%'} src={data.image} alt="" />
                <h3>{data.title}</h3>
                <h3>${data.price}</h3>
                <Link to={`/DetailsProduct/${data.id}`}>more details</Link>
            </div>
        }
        )
    }
</div>

  )
}
