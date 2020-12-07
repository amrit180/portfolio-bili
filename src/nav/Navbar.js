import { Link } from "react-router-dom";
import user from "../images/usergirl.jpg";
import { ImPower } from "react-icons/im";
import { useState } from "react";
import { BarsOutlined, CloseOutlined } from "@ant-design/icons";
const Navbar = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);
  return (
    <>
      <div className="navabar disp">
        <div className="menua-icon dis" onClick={handleClick}>
          <span>
            {click ? (
              <CloseOutlined style={{ color: "#128D78" }} />
            ) : (
              <BarsOutlined style={{ color: "#128D78" }} />
            )}{" "}
          </span>
        </div>
        <div className={click ? "nava-menu active " : "nava-menu "}>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img src={user} className="userpic" alt="user" />
          </div>
          <h1 className="h1name mt-4">Sukriti Grover</h1>
          <p className="text-center textpara">
            <span style={{ color: "#0093db" }}>UI/UX/DESIGNER</span> IN INDIA
          </p>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <ul className="nav flex-column mar">
              <li onClick={handleClick}>
                <a className="linkli" href="#">
                  Home
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#about">
                  About
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#services">
                  Services
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#skills">
                  Skills
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#education">
                  Education
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#experience">
                  Exprience
                </a>
              </li>
              <li onClick={handleClick}>
                <a className="linkli" href="#work">
                  work
                </a>
              </li>

              <li onClick={handleClick}>
                <a className="linkli" href="#contact">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <h5 className="h2name mt-5">
            <ImPower className="iconfooter" />
            <a
              className="h2name"
              style={{ textDecoration: "none", color: "#2b2b2b" }}
              href="https://biliweb.com"
            >
              {" "}
              by{" "}
              <span className="h2name" style={{ color: "#0093db" }}>
                Bili
              </span>
            </a>
          </h5>
        </div>
      </div>
    </>
  );
};
export default Navbar;
