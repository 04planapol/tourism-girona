import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Multimedia from './components/Multimedia';
import ActivityList from './components/ActivityList';
import Cart from './components/Cart';
import './App.css'; // Importem els estils

function App() {
  // Hook useState: Guardem les activitats triades
  const [cart, setCart] = useState([]);

  // Funció per afegir al carret (evitant duplicats)
  const addToCart = (activity) => {
    if (!cart.find(item => item.id === activity.id)) {
      setCart([...cart, activity]);
    } else {
      alert("Aquesta activitat ja la tens al carret!");
    }
  };

  // Funció per treure del carret
  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <div className="app-container">
      <Navbar cartCount={cart.length} />
      <Hero />
      <Multimedia />
      
      <div className="main-content">
        <ActivityList addToCart={addToCart} />
        <Cart cartItems={cart} removeFromCart={removeFromCart} />
      </div>
      
      <footer>
        <p>© 2026 Turisme Local - Projecte React</p>
      </footer>
    </div>
  );
}

export default App;