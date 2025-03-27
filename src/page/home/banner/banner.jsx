import { Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./banner.css";

const Banner = () => {
  return (
    <Container fluid>
      <div
        className="banner"
        style={{ backgroundImage: "url('/img/banner1.jpg')" }}
      >
        <div className="banner_content">
          <span className="banner_subtext">New Inspiration 2020</span>
          <h1 className="banner_title">20% off on new season</h1>
          <Link to="shop">
            <button className="btn">Browse collections</button>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Banner;
