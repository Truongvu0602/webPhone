import React from "react";
import { Link } from "react-router-dom";
import "./footerItem.css";
export default function FooterItem(props) {
  return (
    <div>
      <h2 className="footer_title">{props.title}</h2>
      <ul className="footer_list">
        <li className="footer_item">
          <Link to="/" className="footer_link">
            {props.text1}
          </Link>
        </li>
        <li className="footer_item">
          <Link to="/" className="footer_link">
            {props.text2}
          </Link>
        </li>
        <li className="footer_item">
          <Link to="/" className="footer_link">
            {props.text3}
          </Link>
        </li>
        <li className="footer_item">
          <Link to="/" className="footer_link">
            {props.text4}
          </Link>
        </li>
      </ul>
    </div>
  );
}
