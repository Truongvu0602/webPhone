import "./App.css";
import Home from "./page/home/home";
import Shop from "./page/shop/shop";
import Detail from "./page/detail/detail";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Cart from "./page/cart/cart";
import Register from "./page/register/register";
import Login from "./page/login/login";
import Checkout from "./page/checkout/checkout";
import OrderedProduct from "./page/orderedProduct/orderedProduct";
import Profile from "./page/profile/profile";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/orderProduct" element={<OrderedProduct />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </>
  );
}

export default App;
