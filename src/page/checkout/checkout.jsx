import React, { useState, useEffect } from "react";
import "./checkout.css";
import Menu from "../../components/menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { createOrder } from "../../redux/oder/oderThunk";
import { useNavigate } from "react-router-dom";

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.order.orderList.cartItems);
  const [inputName, setInputName] = useState("");
  const [inputEmail, setInputEmail] = useState("");
  const [inputAddress, setInputAddress] = useState("");
  const [inputPhone, setInputPhone] = useState("");
  const [inputOption, setInputOption] = useState("");
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() => {
    const total = orderList?.reduce((acc, item) => {
      return acc + item.product?.price * item.quantity;
    }, 0);
    setTotalAmount(total);
  }, [orderList]);

  async function handleClickOder(e) {
    e.preventDefault();

    const result = await dispatch(
      createOrder({
        fullName: inputName,
        email: inputEmail,
        shippingAddress: inputAddress,
        phoneNumber: inputPhone,
        paymentMethod: inputOption,
        totalAmount: totalAmount,
      })
    );

    if (result.meta.requestStatus === "fulfilled") {
      alert("✅ Đặt hàng thành công!");
      navigate("/orderProduct");
    } else {
      alert("❌ Đặt hàng thất bại. Vui lòng thử lại.");
      console.error("Error:", result.payload);
    }
  }
  return (
    <div>
      <Menu />
      <div className="checkout-container">
        <h2>Thanh Toán</h2>

        <div className="checkout-products">
          <h3>Sản phẩm bạn chọn</h3>
          <table className="checkout-table">
            <thead>
              <tr>
                <th>Ảnh</th>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng tiền</th>
              </tr>
            </thead>
            <tbody>
              {orderList && orderList.length > 0 ? (
                orderList.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img
                        src={
                          item.product?.img1 || "https://via.placeholder.com/60"
                        }
                        alt={item.product?.name}
                        style={{ width: "60px" }}
                      />
                    </td>
                    <td>{item.product?.name}</td>
                    <td>{item.product?.price.toLocaleString()}₫</td>
                    <td>{item.quantity}</td>
                    <td>
                      {item.product?.price != null
                        ? item.product.price.toLocaleString() + "₫"
                        : "0₫"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: "center" }}>
                    Không có sản phẩm nào trong giỏ hàng
                  </td>
                </tr>
              )}
            </tbody>
          </table>

          {/* Tổng cộng */}
          <div
            className="checkout-total"
            style={{
              textAlign: "right",
              marginTop: "10px",
              fontWeight: "bold",
              fontSize: "16px",
            }}
          >
            Tổng cộng: {(totalAmount || 0).toLocaleString()}₫
          </div>
        </div>

        <form className="checkout-form">
          <label>Họ tên:</label>
          <input
            type="text"
            placeholder="Nhập họ tên"
            required
            value={inputName}
            onChange={(e) => setInputName(e.target.value)}
          />

          <label>Email:</label>
          <input
            type="email"
            placeholder="Nhập email"
            required
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
          />

          <label>Địa chỉ giao hàng:</label>
          <input
            type="text"
            placeholder="Nhập địa chỉ giao hàng"
            required
            value={inputAddress}
            onChange={(e) => setInputAddress(e.target.value)}
          />

          <label>Số điện thoại:</label>
          <input
            type="text"
            placeholder="Nhập số điện thoại"
            required
            value={inputPhone}
            onChange={(e) => setInputPhone(e.target.value)}
          />

          <label>Phương thức thanh toán:</label>
          <select
            value={inputOption}
            onChange={(e) => setInputOption(e.target.value)}
            required
          >
            <option value="">-- Chọn phương thức thanh toán --</option>
            <option value="cod">Thanh toán khi nhận hàng (COD)</option>
            <option value="bank">Chuyển khoản ngân hàng</option>
            <option value="momo">Ví MoMo</option>
          </select>

          <button type="submit" onClick={handleClickOder}>
            Xác nhận đơn hàng
          </button>
        </form>
      </div>
    </div>
  );
};

export default Checkout;
