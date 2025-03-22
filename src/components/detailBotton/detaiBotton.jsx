import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import "./detailBotton.css";
import { fetchDetailBottonThunk } from "../../redux/productThunk";
const DetaiBotton = () => {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product.productList);
  function handleClickId(id) {
    console.log(id);

    dispatch(fetchDetailBottonThunk(id));
  }

  return (
    <div className="product-container">
      {product.map((item) => (
        <div
          key={item.id}
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
