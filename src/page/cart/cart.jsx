import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import { Container } from "react-bootstrap";
import "./cart.css";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Banner from "./banner/banner";
import { getCart } from "../../redux/cart/cartThunk";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartAll = useSelector((state) => state.cart.cartAll);
  console.log(1);

  console.log(cartAll);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);
  return (
    <div>
      <Menu />
      <Banner />

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

        {cartItems.map((item) => {
          return (
            <tbody>
              <tr>
                <td>
                  <img src="" alt="anh" />
                </td>
                <td>{item.productId}</td>
                <td>${}</td>
                <td>
                  <div className="quantity-wrapper">
                    <button>
                      <FaArrowDown />
                    </button>
                    <span>{item.quantity}</span>
                    <button>
                      <FaArrowUp />
                    </button>
                  </div>
                </td>
                <td>
                  <button className="remove-btn">Xóa</button>
                </td>
              </tr>
            </tbody>
          );
        })}
      </table>
    </div>
  );
};

export default Cart;
