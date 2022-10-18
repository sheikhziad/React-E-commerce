import React from "react";
import {useEffect, useState} from "react"
import Navbar from "./compenents/navbar";
import Footer from "./compenents/footer";
import './style.css'

import Products from "./compenents/Products/products"
import Wishlist from "./compenents/wishlist";
import MyCart from "./compenents/cart";
import Order from "./compenents/order";
import Login from "./compenents/login/login";
import Signup from "./compenents/login/signup";
import OrderSuccess from "./compenents/orderSuccess";

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

import { Context } from "./compenents/context";

const storeWishlist = () => {
  let storeWishlist = localStorage.getItem('store_wishlist') 
  if(storeWishlist)  {
    return JSON.parse(localStorage.getItem('store_wishlist'))
  } else {
    return []
  }
  }

  const storeCart = () => {
  let storeCart = localStorage.getItem('store_cart') 
  if(storeCart)  {
    return JSON.parse(localStorage.getItem('store_cart'))
  } else {
    return []
  }
  }


function App() {
  const [data, setData] = useState([])
  const [CartData, setCart] = useState(storeCart())
  const [wishlist, setWishlist] = useState(storeWishlist())
  const [count, setCount] = useState(0)
  const [wish, setWish] = useState(0)
  const [show, setshow] = useState(true)

    //fetching products from an API
    const fetchProducts = async () => {
      const response = fetch("https://fakestoreapi.com/products");
      setData(await (await response).json());
    };
    useEffect( () => {
        fetchProducts();
    }, []);

    //storing wishlist & cart locally'
    localStorage.setItem('store_wishlist', JSON.stringify(wishlist));
    localStorage.setItem('store_cart', JSON.stringify(CartData));
    
    //Click functions
    const handleClick = (item) => {
      if(CartData.indexOf(item) !== -1) return;
      setCart( [...CartData, item]);
      setCount(count+1)
    }

    const handleWishlist = (item) => {
      if(wishlist.indexOf(item) !== -1) return;
      setWishlist( [...wishlist, item]);
      setWish(wish+1)
    }

    const handleWishDelete = (id) => {
      const arr = wishlist.filter((item) => item.id !== id);
      setWishlist(arr);
      setWish(wish-1);
  }

    const handleDelete = (id) => {
        const arr = CartData.filter((item) => item.id !== id);
        setCart(arr);
        setCount(count-1);
    }

    //getting orders from order component
    const [orderData, setorderData] = useState("")
    const getOrders = (data) => {
      setorderData(data);
      localStorage.setItem('ordersdata', JSON.stringify(data))
    };

  return (
    <>
    <Router>
      <Navbar wish={wish} count={count} show={show} setshow={setshow}/>

      <Routes>
          <Route path ="/" element={ 
            show? 
            <Context.Provider value={{handleClick, handleWishlist}}>
              <Products productData={data}/> 
            </Context.Provider> : <>
            <MyCart CartData={CartData} handleDelete={handleDelete}/> 
            <Wishlist wishlist={wishlist} handleWishDelete={handleWishDelete}/>
            </>                      
            }/>
          <Route path ="/cart" element={<MyCart CartData={CartData} handleDelete={handleDelete}/>}/>
          <Route path ="/wishlist" element={<Wishlist wishlist={wishlist} handleClick={handleClick}/>} />
          <Route path ="/order" element={<Order CartData={CartData} getOrders={getOrders}/>}/>
          <Route path ="/login" element={<Login />}/>
          <Route path ="/signup" element={<Signup />}/>
          <Route path ="/orderSuccess" element={<OrderSuccess orders={orderData}/>}/>
      </Routes>
    </Router>    
    <Footer />
    </>
  );
}

export default App;
