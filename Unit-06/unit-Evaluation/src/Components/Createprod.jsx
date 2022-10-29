import React from 'react'
import { Link } from 'react-router-dom'
export const Createprod = () => {
    const [image,setImg] = React.useState("");
    const [title,setTitle] = React.useState("");
    const [price,setPrice] = React.useState("")
    const addProduct= ()=>{
        const paylode = {
                    image:image,
                    title : title,
                    price : price,
                }
       fetch(`http://localhost:3002/products`,{
        method : "POST",
        body : JSON.stringify(paylode),
        headers : {
          "Content-Type" : "application/json"
        }
       })
    }
  return (
    <div>
            <label>Image Url : </label>
            <input type="text" placeholder='Enter Url' onChange={(e)=>setImg(e.target.value)} value={image}/><br /><br />
            <label>Title : </label>
            <input type="text" placeholder='Enter Title' onChange={(e)=>setTitle(e.target.value)} value={title}/><br /><br />
            <label >Price : </label>
            <input type="text" placeholder='Enter Price' onChange={(e)=>setPrice(e.target.value)} value={price}/><br /><br />
            <Link to="/"><button onClick={addProduct} style={{backgroundColor : "blue",color : "white"}}>Add Product</button></Link>
    </div>
  )
}
