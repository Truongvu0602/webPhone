import React from "react";
import { useSelector } from "react-redux";
import "./detail.css";
import DetaiBotton from "../components/detailBotton/detaiBotton";

const Detail = () => {
  const detaiList = useSelector((state) => state.product.detailList);

  console.log(detaiList);

  return (
    <div>
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
          <p>Chi tiêt : {detaiList.long_desc}</p>
          <p>Doanh mục : {detaiList.category}</p>
        </div>
      </div>
      <DetaiBotton />
    </div>
  );
};

export default Detail;
