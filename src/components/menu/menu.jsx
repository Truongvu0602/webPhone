import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCartShopping,
  faUser,
  faRightToBracket,
  faArrowRightFromBracket,
} from "@fortawesome/free-solid-svg-icons";
import "./menu.css";
const Menu = () => {
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
              <Link to="/" className="" end>
                Home
              </Link>
            </li>
            <li className="nav_item">
              <Link to="shop">Shop</Link>
            </li>
          </ul>
          <div className="nav_brand">
            <h1 className="nav_brandText">
              <Link to="/">Boutique</Link>
            </h1>
          </div>
          <ul className="nav_list">
            <li className="nav_item nav_cartIcon">
              <Link to="cart">
                <FontAwesomeIcon className="link_icon" icon={faCartShopping} />
                <span className="nav_cartQuant"></span>
                Cart
              </Link>
            </li>
            <li className="nav_item"></li>
          </ul>
        </nav>
      </Container>
    </Container>
  );
};

export default Menu;
