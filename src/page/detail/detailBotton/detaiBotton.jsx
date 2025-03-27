import React from "react";
import { useSelector } from "react-redux";

import "./detailBotton.css";

const DetaiBotton = ({ handleClickId, selectedId }) => {
  const product = useSelector((state) => state.product.productList);

  return (
    <div className="product-container">
      {product.map((item) => (
        <div
          key={item.id}
          className={
            item.id === selectedId ? "product-item selected" : "product-item"
          }
          onClick={() => {
            handleClickId(item.id);
          }}
        >
          <img src={item.img1} alt="anh" />
        </div>
      ))}
    </div>
  );
};

export default DetaiBotton;
