import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./detail.css";
import DetaiBotton from "./detailBotton/detaiBotton";
import Menu from "../../components/menu/menu";
import { useNavigate } from "react-router-dom";

import {
  fetchCartThunk,
  fetchDetailBottonThunk,
} from "../../redux/productThunk";

const Detail = () => {
  const detaiList = useSelector((state) => state.product.detailList);
  const [idCart, setIdCart] = useState(null);
  const [selectedId, setSelectedId] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  function handleClickId(id) {
    setIdCart(id);
    setSelectedId(id);
    dispatch(fetchDetailBottonThunk(id));
  }

  const hanleClick = () => {
    dispatch(fetchCartThunk({ id: idCart }));
    navigate("/cart");
  };

  return (
    <div>
      <Menu />
      <div className="detail-container">
        <div className="img-container">
          <img src={detaiList.img1} alt="" />
          <img src={detaiList.img2} alt="" />
          <img src={detaiList.img3} alt="" />
          <img src={detaiList.img4} alt="" />
        </div>
        <div className="text-container">
          <p>Tên sản phẩm : {detaiList.name}</p>
          <p>Giá: ${detaiList.price}</p>
          <p>Giới thiệu : {detaiList.short_desc}</p>
          <p>Chi tiết : {detaiList.long_desc}</p>
          <p>Danh mục : {detaiList.category}</p>

          <div className="detail-button-container">
            <button onClick={hanleClick}>Cart</button>
          </div>
        </div>
      </div>
      <DetaiBotton handleClickId={handleClickId} selectedId={selectedId} />
    </div>
  );
};

export default Detail;
