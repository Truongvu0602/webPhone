import React from "react";
import Menu from "../../components/menu/menu";
import { Container } from "react-bootstrap";
import {
  faTrashCan,
  faAngleLeft,
  faAngleRight,
  faArrowLeft,
  faArrowRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import "./cart.css";
import { useSelector } from "react-redux";
const Cart = () => {
  const cart = useSelector((state) => state.product.cart);
  console.log(cart);

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
              {" "}
              <img src={cart.img1} alt="anh" />
            </td>
            <td>{cart.category}</td>
            <td>{cart.price}</td>
            <td>0</td>
            <td>xóa</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Cart;
