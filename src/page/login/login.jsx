import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loginThunk } from "../../redux/auth/authThunk";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  //   function handleClick(e) {
  //     e.preventDefault();
  //     console.log("Dữ liệu gửi đi:", { email, pass: password });
  //     dispatch(loginThunk({ email, pass: password }));
  //     navigate("/");
  //   }
  async function handleClick(e) {
    e.preventDefault();

    console.log("Dữ liệu gửi đi:", { email, pass: password });

    const result = await dispatch(loginThunk({ email, pass: password }));

    if (result.payload?.token) {
      localStorage.setItem("token", result.payload.token); // Lưu token vào localStorage
      navigate("/"); // Chuyển hướng về trang chính
      window.location.reload(); // Cập nhật UI ngay lập tức
      console.log("Token in localStorage:", localStorage.getItem("token"));
    } else {
      alert("Đăng nhập thất bại! Vui lòng kiểm tra lại.");
    }
  }

  return (
    <div>
      <Menu />
      <Container fluid>
        <div className="pageHeader_wrapper">
          <h1>Login</h1>
          <p>Login</p>
        </div>
      </Container>
      <div className="d-flex justify-content-center align-items-center bg-light">
        <div
          className="card shadow-lg"
          style={{ width: "24rem", backgroundColor: "#f4f5f9" }}
        >
          <div className="card-body">
            <h2 className="text-center mb-4">Đăng Nhập</h2>
            <form>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <button
                type="submit"
                className="btn btn-dark w-100 mb-2"
                onClick={handleClick}
              >
                Đăng Nhập
              </button>
              <button
                type="button"
                className="btn btn-outline-dark w-100"
                onClick={() => navigate("/register")}
              >
                Đăng Ký
              </button>
            </form>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Login;
