import React, { useEffect, useState } from "react";
import ShopHeader from "./shopAll/shopHeader";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import {
  fetchDataThunk,
  fetchCategoryDataThunk,
  fetchDetailThunk,
} from "../../redux/product/productThunk";
import Menu from "../../components/menu/menu";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import "./shop.css";

const Shop = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const product = useSelector((state) => state.product.productList);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    if (selectedCategory === "All") {
      dispatch(fetchDataThunk());
    } else {
      dispatch(fetchCategoryDataThunk(selectedCategory));
    }
  }, [selectedCategory]);

  function handleClick(name) {
    setSelectedCategory(name);
  }

  function handleClickDetail(id) {
    dispatch(fetchDetailThunk(id));
    navigate(`/detail/${id}`);
  }

  return (
    <div>
      <div className="shop-container">
        <Menu />
        <ShopHeader />
        <div className="shop-content">
          <Container fluid>
            <Row>
              {/* Sidebar */}
              <Col md={3} className="shop-sidebar">
                <h4>Categories</h4>
                <ul>
                  <li onClick={() => handleClick("All")}>All</li>
                  <li onClick={() => handleClick("iphone")}>iPhone</li>
                  <li onClick={() => handleClick("watch")}>Watch</li>
                  <li onClick={() => handleClick("Tablet")}>Tablet</li>
                </ul>
              </Col>

              {/* Danh sách sản phẩm */}
              <Col md={9}>
                <div className="product-list">
                  <Row>
                    {product.length === 0 ? (
                      <p>No products found in this category.</p>
                    ) : (
                      product.map((item) => (
                        <Col
                          key={item.id} // Sử dụng id thay vì index
                          md={4} // Hiển thị 3 sản phẩm trên 1 hàng
                          className="product-item"
                          onClick={() => handleClickDetail(item.id)}
                        >
                          <p className="product-name">{item.name}</p>
                          <img
                            src={item.img1}
                            alt="anh1"
                            className="product-image"
                          />
                          <p className="product-desc">{item.short_desc}</p>
                        </Col>
                      ))
                    )}
                  </Row>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Shop;
