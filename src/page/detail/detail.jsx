import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchDetailBottonThunk } from "../../redux/product/productThunk";
import { addToCart } from "../../redux/cart/cartThunk"; // Import action thêm vào giỏ hàng
import "./detail.css";
import DetaiBotton from "./detailBotton/detaiBotton";
import Menu from "../../components/menu/menu";
import { checkAuth } from "../../utils/checkAuth";

const Detail = () => {
  const detaiList = useSelector((state) => state.product.detailList);

  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (selectedId) {
      dispatch(fetchDetailBottonThunk(selectedId));
    }
  }, [selectedId, dispatch]);

  const handleClickId = (id) => {
    setSelectedId(id);
  };

  // const handleAddToCart = () => {
  //   const token = localStorage.getItem("token");

  //   // Kiểm tra nếu không có token (chưa đăng nhập)
  //   if (!token) {
  //     console.log("Token không có. Vui lòng đăng nhập.");
  //     alert("Vui lòng đăng nhập trước khi thêm vào giỏ hàng.");
  //     navigate("/login"); // Điều hướng đến trang login nếu chưa có token
  //     return;
  //   }

  //   const quantity = 1;
  //   const productData = {
  //     productId: detaiList.id,
  //     quantity,
  //   };

  //   // Dispatch action thêm vào giỏ hàng (thunk sẽ xử lý gọi API)

  //   dispatch(addToCart(productData));
  //   navigate("/cart"); // Điều hướng tới giỏ hàng sau khi thêm sản phẩm
  // };
  const handleAddToCart = () => {
    if (!checkAuth(navigate)) return;

    const productData = {
      productId: detaiList.id,
      quantity: 1,
    };

    dispatch(addToCart(productData));
    navigate("/cart");
  };
  return (
    <div>
      <Menu />
      <div className="detail-container">
        <div className="img-container">
          <img src={detaiList.img1} alt={detaiList.name} />
          <img src={detaiList.img2} alt={detaiList.name} />
          <img src={detaiList.img3} alt={detaiList.name} />
          <img src={detaiList.img4} alt={detaiList.name} />
        </div>
        <div className="text-container">
          <p>Tên sản phẩm : {detaiList.name}</p>
          <p>Giá: ${detaiList.price}</p>
          <p>Giới thiệu : {detaiList.short_desc}</p>
          <p>Chi tiết : {detaiList.long_desc}</p>
          <p>Danh mục : {detaiList.category}</p>

          <div className="detail-button-container">
            <button onClick={handleAddToCart}>Add Cart</button>
          </div>
        </div>
      </div>
      <DetaiBotton handleClickId={handleClickId} selectedId={selectedId} />
    </div>
  );
};

export default Detail;
