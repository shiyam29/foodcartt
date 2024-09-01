import { useState } from "react"; // Import useState from React
import data from "../assets/products.json";
import Product from "./Product";
import "./Home.css";
const Home = () => {
  const [products] = useState(data); // Correctly use useState to manage the products state

  return (
    <div className="product-container">
      {products.map((product) => (
        <Product key={product.id} product={product} />
      ))}
    </div>
  );
};

export default Home;
