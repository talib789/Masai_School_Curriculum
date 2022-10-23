import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const { productId } = useParams();
  const [isLoading, setIsLoading] = React.useState(false);
  const [isError, setIsError] = React.useState(false);
  const [productDetails, setProductDetails] = React.useState({});
  
  React.useEffect(() => {
    let isSubscribed = true;

    setIsLoading(true);
    fetch(`http://localhost:3001/products/${productId}`)
      .then((res) => res.json())
      .then((res) => {
        setIsError(false);
        return isSubscribed ? setProductDetails(res) : null;
      })
      .catch((error) => setIsError(true))
      .finally(() => setIsLoading(false));

    return () => {
      isSubscribed = false; 
    };
  }, [productId]);



  if (isLoading) {
    return <h2>Loading....</h2>;
  }

  if (isError) {
    return <h2>Error</h2>;
  }

  

  return <div>{JSON.stringify(productDetails)}</div>;
};

export default ProductDetails;
