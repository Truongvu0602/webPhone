import React, { useEffect, useState } from "react";
import ShopHeader from "../components/shopAll/shopHeader";
import { Col, Container, Row } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { fetchDataThunk } from "../redux/productThunk";
import { fetchCategoryDataThunk } from "../redux/productThunk";
import { fetchDetailThunk } from "../redux/productThunk";

import Footer from "../components/footer/footer";
import { useNavigate } from "react-router-dom";
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
  }, [dispatch, selectedCategory]);

  function handleClick(name) {
    console.log(name);

    setSelectedCategory(name);
  }
  function handleClickDetail(id) {
    // console.log(id);

    dispatch(fetchDetailThunk(id));
    navigate(`/detail/${id}`);
  }
  return (
    <div>
      <div style={{ marginLeft: "150px", marginRight: "150px" }}>
        <ShopHeader />
        <div style={{ display: "flex" }}>
          <Container fluid>
            <Row style={{ display: "flex" }}>
              {/* Menu Sidebar */}
              <Col
                style={{
                  backgroundColor: "#f8f9fa",
                  padding: "16px",
                  minWidth: "200px",
                  flex: "1",
                }}
              >
                <h4>Categories</h4>
                <ul style={{ listStyle: "none", padding: "0" }}>
                  <li
                    style={{ marginBottom: "8px", cursor: "pointer" }}
                    onClick={() => handleClick("All")}
                  >
                    All
                  </li>
                  <li
                    style={{ marginBottom: "8px", cursor: "pointer" }}
                    onClick={() => handleClick("iphone")}
                  >
                    iPhone
                  </li>

                  <li
                    style={{ marginBottom: "8px", cursor: "pointer" }}
                    onClick={() => handleClick("watch")}
                  >
                    Watch
                  </li>
                  <li
                    style={{ marginBottom: "8px", cursor: "pointer" }}
                    onClick={() => handleClick("Tablet")}
                  >
                    Tablet
                  </li>
                </ul>
              </Col>

              {/* Product List */}
              <Col style={{ flex: "3" }}>
                <Row style={{ display: "flex", gap: "12px", flexWrap: "wrap" }}>
                  {product.length === 0 ? (
                    <p>No products found in this category.</p> // Thông báo nếu không có sản phẩm
                  ) : (
                    product.map((item, index) => (
                      <Col
                        key={index}
                        style={{
                          flex: "1 1 calc(33.333% - 12px)",
                          maxWidth: "300px",
                        }}
                      >
                        <div
                          onClick={() => {
                            handleClickDetail(item.id);
                          }}
                          style={{
                            border: "1px solid #ddd",
                            padding: "16px",
                            textAlign: "center",
                            borderRadius: "8px",
                            boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                            backgroundColor: "#fff",
                            transition: "all 0.3s ease-in-out",
                            cursor: "pointer",
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.borderColor = "#007bff";
                            e.currentTarget.style.boxShadow =
                              "0px 8px 12px rgba(0, 123, 255, 0.2)";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.borderColor = "#ddd";
                            e.currentTarget.style.boxShadow =
                              "0px 4px 6px rgba(0, 0, 0, 0.1)";
                          }}
                        >
                          <p
                            style={{
                              fontWeight: "bold",
                              marginBottom: "8px",
                            }}
                          >
                            {item.name}
                          </p>
                          <img
                            src={item.img1}
                            alt="anh1"
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "8px",
                              marginBottom: "8px",
                              transition: "transform 0.3s ease-in-out",
                            }}
                            onMouseEnter={(e) =>
                              (e.currentTarget.style.transform = "scale(1.1)")
                            }
                            onMouseLeave={(e) =>
                              (e.currentTarget.style.transform = "scale(1)")
                            }
                          />
                          <p style={{ fontSize: "14px", color: "#555" }}>
                            {item.short_desc}
                          </p>
                        </div>
                      </Col>
                    ))
                  )}
                </Row>
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
