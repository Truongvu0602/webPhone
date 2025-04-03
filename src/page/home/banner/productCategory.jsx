import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import "./productCategory.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchHomeDataThunk } from "../../../redux/product/productThunk";
export default function ProductCategory() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const homeList = useSelector((state) => state.product.homeList);

  useEffect(() => {
    dispatch(fetchHomeDataThunk());
  }, [dispatch]);
  return (
    <div className="prodCategory_wrapper">
      <div className="prodCategory_text">
        <span className="prodCategory_subText">
          Carefully Created Collections
        </span>
        <h2 className="prodCategory_title">Browse Our Categories</h2>
      </div>
      <div className="prodCategory_list1">
        <Container fluid>
          <Row className="justify-content-center gx-1 gy-1">
            {homeList.map((item, index) => (
              <Col
                key={index}
                md={4}
                sm={6}
                xs={6}
                className="d-flex justify-content-center"
              >
                <div
                  className="prodCategory_item"
                  onClick={() => navigate("shop")}
                >
                  <img src={item.img1} alt="anh" />
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
      <div className="prodCategory_list2"></div>
    </div>
  );
}
