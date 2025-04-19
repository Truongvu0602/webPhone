import React, { useEffect } from "react";
import Menu from "../../components/menu/menu";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/oder/oderThunk";
import "./orderedProduct.css";

const OrderedProduct = () => {
  const dispatch = useDispatch();
  const orderedProduct = useSelector(
    (state) => state.order.orderedProduct.orders
  );
  console.log(1);

  useEffect(() => {
    dispatch(getOrder());
  }, [dispatch]);
  return (
    <div>
      <Menu />
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
          {orderedProduct && orderedProduct.length > 0 ? (
            orderedProduct.map((order, index) =>
              order.order_items.map((item, idx) => (
                <tr key={`${index}-${idx}`}>
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
                  <td>{item.product?.price?.toLocaleString()}₫</td>
                  <td>{item.quantity}</td>
                  <td>
                    {(item.product?.price * item.quantity)?.toLocaleString()}₫
                  </td>
                </tr>
              ))
            )
          ) : (
            <tr>
              <td colSpan="5" style={{ textAlign: "center" }}>
                Không có sản phẩm nào trong giỏ hàng
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default OrderedProduct;
