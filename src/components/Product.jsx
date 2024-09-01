
import "./Product.css";
import { useContext } from "react";
import { cartContext } from './cartContext'

const Product = ({ product }) => {
    const {cart,setCart}=useContext(cartContext);
    const name=product.length>21?product.name.substring(0,20)+"..":product.name;


    const addCart=()=>{
        setCart([...cart,product])
    };

    const removeCart=()=>{
        setCart(cart.filter((c)=>c.id!==product.id));
    };

    const isInCart = cart.some((p) => p.id === product.id);


    return (
    <div className="product">
      <div className="img">
        <img src={product.pic} alt={product.name} />
      </div>
      <div className="details">
        <h3>{name}</h3>
        <p> Price Rs:{product.amt}</p>
       {isInCart ? (
                    <button className="btnremove" onClick={removeCart}>Remove from Cart</button>
                ) : (
                    <button onClick={addCart}>Add to Cart</button>
                )}
      </div>
    </div>
  );
};

export default Product;
