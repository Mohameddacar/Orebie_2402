import React from 'react'
import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Shop from './pages/Shop';
import Contact from './pages/Contact';
import Signup from './pages/Signup';
import Login from './pages/Login';
import Cart from './pages/Cart';
import Error from './pages/Error';
import Checkout from './pages/Checkout';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Home />}></Route>
      <Route path="/about" element={<About />}></Route>
      <Route path="/shop" element={<Shop />}></Route>
      <Route path="/contact" element={<Contact />}></Route>
      <Route path="/signup" element={<Signup />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/checkout" element={<Checkout />}></Route>
      <Route path="/error" element={<Error />}></Route>
    </Route>
  )
);

function App() {

  return (
  <RouterProvider router={router} />
  )
}

export default App
