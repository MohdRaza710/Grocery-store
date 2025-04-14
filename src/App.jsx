import React, { useState } from 'react'
import { useEffect } from 'react'
import './App.css'
import Home from './Pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Products from './Pages/Products'
import Footer from './components/Footer'
import About from './Pages/About'
import Cart from './components/Cart'
import { motion } from 'framer-motion' // Import Framer Motion

function App() {
  const [cartItems, setCartItems] = useState(() => {
    const storedCart = localStorage.getItem('cartItems');
    return storedCart ? JSON.parse(storedCart) : [];
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleAddToCart = (product) => {
    setCartItems(prevItems => [...prevItems, product]);
  };

  const pageVariants = {
    initial: { opacity: 0, y: 50 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -50 },
  };

  return (
    <>
      <Router>
        <Navbar cartCount={cartItems.length} />
        <Routes>
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Home onAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/products"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Products onAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
          <Route
            path="/cart"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Cart cartItems={cartItems} setCartItems={setCartItems} />
              </motion.div>
            }
          />
          <Route
            path="/about"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <About />
              </motion.div>
            }
          />
          <Route
            path="/"
            element={
              <motion.div
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
              >
                <Products onAddToCart={handleAddToCart} />
              </motion.div>
            }
          />
        </Routes>
        <Footer />
      </Router>
    </>
  )
}

export default App
