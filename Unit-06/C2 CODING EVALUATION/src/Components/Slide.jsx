import React from "react";

function Slide() {
  const [Data, setData] = React.useState([])
  const [setError] = React.useState(false)
  const [pages, setPages] = React.useState(1)
  const [totalItems,setTotalItem] = React.useState(0)
  React.useEffect(()=>{
      userData()
  },[pages])
  
  const userData = ()=>{
  
  fetch(`https://slides-app-220822.herokuapp.com/slides?_page=${pages}&_limit=1`)
  .then((res)=> {
  
  let totals = res.headers.get("X-Total-Count");
  
  setTotalItem(+totals)
  
  return res.json()
  })
  .then((res)=> setData(res))
  .catch(()=> setError(true))
  }
  return (
    <div className="slide-container" data-cy="slide">
    { 
    Data.map((data)=>{
      return <div>
  <h3 data-cy="title">{data.title}</h3>
  <p data-cy="description">{data.description}</p>
       
  </div>
       })}
        <button data-cy="prev" onClick={()=>setPages(pages-1)} disabled={pages===1}>Prev</button>
       <button data-cy="next" onClick={()=>setPages(pages+1)}
        disabled = {pages === Math.ceil(totalItems/1)}>Next</button>  
      
     </div>
  );
}
export default Slide;