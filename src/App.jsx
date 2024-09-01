import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Viewcart from './components/Viewcart';
import Home from './components/Home';
import { useState } from 'react';
import { cartContext } from './components/cartContext';

function App() {
    const [cart, setCart] = useState([]);

    return (
        <cartContext.Provider value={{ cart, setCart }}>
            <Router>
                <Header cart={cart} />
                <div className="container">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/cart" element={<Viewcart />} />
                    </Routes>
                </div>
            </Router>
        </cartContext.Provider>
    );
}

export default App;
