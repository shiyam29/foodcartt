import { useState, useEffect } from "react";
import "./Viewcart.css";
import { useContext } from "react";
import { cartContext } from "./cartContext";


const Viewcart = () => {
  const { cart, setCart } = useContext(cartContext); // Add setCart here
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(cart.reduce((acc, curr) => acc + parseFloat(curr.amt), 0));
  }, [cart]);

  const removeFromCart = (id) => {
    setCart(cart.filter((product) => product.id !== id));
  };

  return (
    <>
      <h1 className="cart-heading">Cart Products</h1>
      <div className="cart-container">
        {cart.map((product) => (
          <div className="cart-product" key={product.id}>
            <div className="img">
              <img src={product.pic} alt="image" />
            </div>
            <div className="cart-product-details">
              <h3>{product.name}</h3>
              <p> Price Rs:{product.amt}</p>
              <button onClick={() => removeFromCart(product.id)}>Remove</button>
            </div>
          </div>
        ))}
      </div>

      <h2 className="cart-amt"> Total Amount Rs: {total}</h2>
    </>
  );
};

export default Viewcart;
