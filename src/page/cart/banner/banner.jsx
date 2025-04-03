import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner.css";
import { useNavigate } from "react-router-dom";
const Banner = () => {
  const navigate = useNavigate();
  function handleClick() {
    navigate("/shop");
  }
  return (
    <Container fluid>
      <div
        className="banner"
        style={{ backgroundImage: "url('/img/banner1.jpg')" }}
      >
        <div className="banner_content">
          <span className="banner_subtext">New Inspiration 2020</span>
          <h1 className="banner_title">20% off on new season</h1>

          <button className="btn" onClick={handleClick}>
            Add cart ++
          </button>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
