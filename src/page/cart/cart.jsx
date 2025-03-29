import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import { Container } from "react-bootstrap";
import "./cart.css";
import { useSelector } from "react-redux";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";

const Cart = () => {
  const cart = useSelector((state) => state.product.cart);

  if (!cart) {
    return <p>Loading...</p>;
  }

  const [quantity, setQuantity] = useState(1);
  const [price, setPrice] = useState(cart.price || 0);

  useEffect(() => {
    if (cart) {
      setPrice(cart.price);
    }
  }, [cart]);

  function handleClickApart() {
    if (quantity > 1) {
      setQuantity(quantity - 1);
      setPrice((prevPrice) => prevPrice - cart.price);
    }
  }

  function handleClickAdd() {
    setQuantity(quantity + 1);
    setPrice((prevPrice) => prevPrice + cart.price);
  }

  return (
    <div>
      <Menu />
      <Container fluid>
        <div className="pageHeader_wrapper">
          <h1>Cart</h1>
          <p>cart</p>
        </div>
      </Container>
      <table className="cart_table">
        <thead>
          <tr className="cart_tableHeaders">
            <th>Image</th>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={cart.img1} alt="anh" />
            </td>
            <td>{cart.category}</td>
            <td>${price}</td>
            <td>
              <div className="quantity-wrapper">
                <button onClick={handleClickApart}>
                  <FaArrowDown />
                </button>
                <span>{quantity}</span>
                <button onClick={handleClickAdd}>
                  <FaArrowUp />
                </button>
              </div>
            </td>
            <td>
              <button className="remove-btn">Xóa</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
