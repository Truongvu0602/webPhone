import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "../../components/footer/footer";
import Menu from "../../components/menu/menu";
import { Container } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { registerThunk } from "../../redux/productThunk";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const [serverError, setServerError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

  function handleClick(e) {
    e.preventDefault();
    let newErrors = {};

    if (!name.trim()) newErrors.name = "Tên không được bỏ trống";
    if (!email.trim()) newErrors.email = "Email không được bỏ trống";
    if (!password.trim()) newErrors.password = "Mật khẩu không được bỏ trống";

    const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
    if (email && !emailRegex.test(email))
      newErrors.email = "Email không hợp lệ";

    if (password.length < 6) newErrors.password = "Mật khẩu phải từ 6 ký tự";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setErrors({});
    setServerError("");

    dispatch(registerThunk({ userName: name, email: email, pass: password }))
      .unwrap()
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        console.error("Lỗi đăng ký:", err);
        if (err.msg) {
          setServerError(err.msg);
        } else {
          setServerError("Có lỗi xảy ra, vui lòng thử lại!");
        }
      });
  }

  return (
    <div>
      <Menu />
      <Container fluid>
        <div className="pageHeader_wrapper">
          <h1>Register</h1>
          <p>Register</p>
        </div>
      </Container>
      <div className="d-flex justify-content-center align-items-center  bg-light">
        <div
          className="card shadow-lg"
          style={{ width: "24rem", backgroundColor: "#f4f5f9" }}
        >
          <div className="card-body">
            <h2 className="text-center mb-4">Đăng Ký</h2>
            {serverError && (
              <div className="alert alert-danger">{serverError}</div>
            )}
            <form>
              <div className="mb-3">
                <label className="form-label">Tên người dùng</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nhập tên"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
                {errors.name && (
                  <small className="text-danger">{errors.name}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Nhập email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && (
                  <small className="text-danger">{errors.email}</small>
                )}
              </div>
              <div className="mb-3">
                <label className="form-label">Mật khẩu</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Nhập mật khẩu"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && (
                  <small className="text-danger">{errors.password}</small>
                )}
              </div>
              <button
                type="submit"
                className="btn btn-dark w-100"
                onClick={handleClick}
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

export default Register;
