import React, { useState, useEffect } from "react";
import Menu from "../../components/menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { FaArrowUp, FaArrowDown } from "react-icons/fa";
import Banner from "./banner/banner";
import {
  deleteCart,
  getCart,
  updateCartQuantity,
} from "../../redux/cart/cartThunk";
import "./cart.css";

const Cart = () => {
  const dispatch = useDispatch();
  const cartAll = useSelector((state) => state.cart.cartAll);

  useEffect(() => {
    dispatch(getCart());
  }, [dispatch]);

  function handleClickDelete(id) {
    dispatch(deleteCart(id)).then(() => {
      dispatch(getCart());
    });
  }

  function handleQuantityChange(id, type) {
    dispatch(updateCartQuantity({ id, type })).then(() => {
      dispatch(getCart());
    });
  }

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
            <th>Total</th>
            <th>Remove</th>
          </tr>
        </thead>
        <tbody>
          {cartAll && cartAll.length > 0 ? (
            cartAll.map((item) => (
              <tr key={item.id}>
                <td>
                  <img
                    src={item.product?.img1 || "default-image.jpg"}
                    alt="anh"
                  />
                </td>
                <td>{item.product?.name || "Sản phẩm không tồn tại"}</td>
                <td>${item.product?.price || "0.00"}</td>
                <td>
                  <div className="quantity-wrapper">
                    <button
                      onClick={() => handleQuantityChange(item.id, "decrease")}
                    >
                      <FaArrowDown />
                    </button>
                    <span>{item.quantity}</span>
                    <button
                      onClick={() => handleQuantityChange(item.id, "increase")}
                    >
                      <FaArrowUp />
                    </button>
                  </div>
                </td>
                <td>${(item.product?.price * item.quantity).toFixed(2)}</td>
                <td>
                  <button
                    className="remove-btn"
                    onClick={() => handleClickDelete(item.id)}
                  >
                    Xóa
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="6" className="text-center">
                Giỏ hàng trống
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
