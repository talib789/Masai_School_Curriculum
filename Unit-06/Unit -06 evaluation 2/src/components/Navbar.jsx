import React from "react";
import { AuthContext } from "../context/AuthContext";
import { CartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { isAuth, handleAuth } = React.useContext(AuthContext);
  const { cartCount, handleCart } = React.useContext(CartContext);

  return (
    <div data-cy="navbar">
      {isAuth ? (
        <Link to="/home" data-cy="navbar-home-link">
          Home
        </Link>
      ) : (
        <p>Home</p>
      )}
      {isAuth ? (
        <span
          data-cy="navbar-cart-items-count"
        >
          Cart : {cartCount}
        </span>
      ) : null}
      {isAuth ? (
        <button data-cy="navbar-login-logout-button" onClick={handleAuth}>
          Logout
        </button>
      ) : (
        <Link to="/">Login</Link>
      )}
    </div>
  );
};

export default Navbar;



// import React from "react";
// import { Link } from 'react-router-dom';
// import {CartContext} from '../context/CartContext'

// // use react-router Link or NavLink
// // const Link = <a />;

// const Navbar = () => {
//   const { Count, handleCount} = React.useContext(CartContext)

//   const [CartItem,setCartItem] = React.useState('')

//   const getCartItem = () => {
//     fetch(`http://localhost:8080/cartItems`)
//     .then((res)=>res.json())
//     .then((res) => setCartItem(res))

//     handleCount(CartItem.length)
//   }
// console.log(CartItem.length)
//   React.useEffect(()=>{
//     getCartItem()
//   },[])
//   return (
//     <div data-cy="navbar" >
//       <Link data-cy="navbar-home-link" to={'/'} >Home</Link>
//       <span data-cy="navbar-cart-items-count">{/* count here */}
//       CART {Count}
//       </span>
//       <button data-cy="navbar-login-logout-button">Login</button>
//     </div>
//   );
// };

// export default Navbar;

