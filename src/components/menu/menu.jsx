import { Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.css";
import { useEffect, useState } from "react";

const Menu = () => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/login");
  };

  return (
    <Container
      fluid
      className="sticky-top"
      style={{ backgroundColor: "white" }}
    >
      <Container>
        <nav className="main_nav px-3">
          <ul className="nav_list">
            <li className="nav_item">
              <span className="nav_link" onClick={() => navigate("/")}>
                Home
              </span>
            </li>
            <li className="nav_item">
              <span className="nav_link" onClick={() => navigate("/shop")}>
                Shop
              </span>
            </li>
          </ul>
          <div className="nav_brand">
            <h1 className="nav_brandText">
              <span className="nav_link" onClick={() => navigate("/")}>
                Boutique
              </span>
            </h1>
          </div>
          <ul className="nav_list">
            <li className="nav_item nav_cartIcon">
              <span
                className="nav_link"
                onClick={() => navigate("/orderProduct")}
              >
                <FontAwesomeIcon className="link_icon" icon={faCartShopping} />
                <span className="nav_cartQuant"></span>
                OrderProduct
              </span>
            </li>
            <li className="nav_item nav_cartIcon">
              <span className="nav_link" onClick={() => navigate("/cart")}>
                <FontAwesomeIcon className="link_icon" icon={faCartShopping} />
                <span className="nav_cartQuant"></span>
                Cart
              </span>
            </li>
            {isLoggedIn ? (
              // Nếu đã đăng nhập, hiển thị nút Logout
              <li className="nav_item nav_cartIcon">
                <span className="nav_link" onClick={handleLogout}>
                  <FontAwesomeIcon
                    className="link_icon"
                    icon={faArrowRightFromBracket}
                  />
                  Logout
                </span>
              </li>
            ) : (
              // Nếu chưa đăng nhập, hiển thị nút Login
              <li className="nav_item nav_cartIcon">
                <span className="nav_link" onClick={() => navigate("/login")}>
                  <FontAwesomeIcon className="link_icon" icon={faUser} />
                  Login
                </span>
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </Container>
  );
};

export default Menu;
