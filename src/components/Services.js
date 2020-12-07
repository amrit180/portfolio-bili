import { AiOutlineBulb, AiOutlineMobile } from "react-icons/ai";
import Card2 from "./Card2";
import { BiGlobeAlt } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";

const Services = () => {
  return (
    <div id="services">
      <div style={{ marginTop: "10vh", marginBottom: "10%" }}>
        <p className="paraabout mt-5 ml-5">WHAT I DO?</p>
        <h2 className="h3name mt-5 ml-5">
          HERE ARE SOME OF MY <br />
          EXPERTISE
        </h2>
        <div
          className="row ml-2"
          style={{
            marginTop: "10vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <div className="col-md-6" data-aos="fade-right">
            <Card2
              style={{ borderBottom: "#0093db 2px solid" }}
              style2={{ backgroundColor: "#0093db" }}
              icon={<AiOutlineBulb />}
              paracard="Separated they live in Bookmarksgrove right at the coast of the Semantics"
              title="INNOVATIVE IDEAS"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <Card2
              style={{ borderBottom: "#F61703 2px solid" }}
              style2={{ backgroundColor: "#F61703" }}
              icon={<BiGlobeAlt />}
              paracard="Separated they live in Bookmarksgrove right at the coast of the Semantics"
              title="INNOVATIVE IDEAS"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <Card2
              style={{ borderBottom: "#F6C003 2px solid" }}
              style2={{ backgroundColor: "#F6C003" }}
              icon={<FiDatabase />}
              paracard="Separated they live in Bookmarksgrove right at the coast of the Semantics"
              title="INNOVATIVE IDEAS"
            />
          </div>
          <div className="col-md-6" data-aos="fade-right">
            <Card2
              style={{ borderBottom: "#0363F6 2px solid" }}
              style2={{ backgroundColor: "#0363F6" }}
              icon={<AiOutlineMobile />}
              paracard="Separated they live in Bookmarksgrove right at the coast of the Semantics"
              title="INNOVATIVE IDEAS"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
