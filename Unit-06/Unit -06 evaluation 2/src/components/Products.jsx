import React from "react";
import Product from "./Product";


const Products = () => {
  const [data, setData] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const getProduct = () => {
    setLoading(true);
    fetch("http://localhost:8080/products")
      .then((res) => res.json)
      .then((res) => {
        setData(res);
      })
      .catch((erro) => {
        setError(true);
        setData([]);
      })
      .finally(() => setLoading(false));
  };

  React.useEffect(() => {
    getProduct();
  }, []);

  return (
    <div>
      {loading ? (
        <h1>loading...</h1>
      ) : error ? (
        <h1>error....</h1>
      ) : (
        data.map((item) => <Product item={item} key={item.id}/>)
      )}
    </div>
  );
};

export default Products;





// import React from "react";
// import Product from './Product'
// const Products = () => {

//   const [data,setData] = React.useState([])

//   const getdata = () =>{
//     fetch('http://localhost:8080/products')
//     .then((res) => res.json())
//     .then((res) => setData(res))
//   }

//   React.useEffect(() => {
//     getdata()
//   },[])
//   console.log(data)
//   return <div>{/* Code here */}
//       {
//         data.map((el)=>(
//           <div key={el.id}>
//             <Product data={el}/>
//           </div>
//         ))
//       }
//   </div>;
// };

// export default Products;