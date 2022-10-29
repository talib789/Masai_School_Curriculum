import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux';
import {useNavigate} from 'react-router-dom';
import { Link } from 'react-router-dom';
export const DetailsProd = () => {
    const { id } = useParams()
    const [loding, setLoding] = React.useState(false)
    const [error, setError] = React.useState(false);
    const [singleProd, setSingleProd] = React.useState({})
    const isLoggedIn = useSelector(store => store.isLoggedIn);
    const navigate = useNavigate();
    React.useEffect(() => {
        setLoding(true)
        if(!isLoggedIn){
            navigate('/login');
        }
        else{
            fetch(`http://localhost:3002/products/${id}`)
            .then((res) => res.json())
            .then((res) => setSingleProd(res))
            .catch(() => setError(true))
            .finally(() => setLoding(false))
        }
    }, [isLoggedIn])
    return loding ? (<div>Loding...</div>) : error ? (<div>Somthing Went Wrong</div>) : (<div>
        <img src={singleProd.image} alt="profile" />
        <h4>{singleProd.title}</h4>
        <h4>{singleProd.category
        }</h4>
        <h4>{singleProd.brand
}</h4>
        <h4> {singleProd.price}</h4>
        <Link to = "/editproduct" style={{testDecoration : "none"}}>Edit Product</Link>
    </div>)
}
