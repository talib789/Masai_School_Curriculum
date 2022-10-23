import React from "react";
import { Link } from "react-router-dom";

const AllProducts = () => {
  const [products, setProducts] = React.useState([]);

  React.useEffect(() => {
   
    fetch(`http://localhost:3001/products`)
      .then((res) => res.json())
      .then((res) => setProducts(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      {
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
              <th>More Details</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id}>
                <td>{product.name}</td>
                <td>{product.price}</td>
                <td>
                  <Link to={`/products/${product.id}`}>more details...</Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      }
    </>
  );
};

export default AllProducts;
