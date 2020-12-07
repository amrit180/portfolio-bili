import Card from "./Card";
import { AiOutlineBulb, AiOutlineMobile } from "react-icons/ai";
import { BiGlobeAlt } from "react-icons/bi";
import { FiDatabase } from "react-icons/fi";
const About = (props) => {
  return (
    <div id="about">
      <p className="paraabout mt-5 ml-5">About us</p>
      <h2 className="h3name mt-5 ml-5">Who am I?</h2>
      <p className="parawriting ml-5 mr-5">
        <span style={{ fontWeight: "bold" }}> Hi I'm Sukriti Grover </span>On
        her way she met a copy. The copy warned the Little Blind Text, that
        where it came from it would have been rewritten a thousand times and
        everything that was left from its origin would be the word "and" and the
        Little Blind Text should turn around and return to its own, safe
        country.
      </p>
      <p className="parawriting ml-5 mr-5">
        Even the all-powerful Pointing has no control about the blind texts it
        is an almost unorthographic life One day however a small line of blind
        text by the name of Lorem Ipsum decided to leave for the far World of
        Grammar.
      </p>
      <div className="ml-5 mb-5 mr-5 row">
        <div className="col-md-6">
          <Card
            icon={<AiOutlineBulb style={{ color: "#0093db" }} />}
            style={{ borderBottom: "#0093db solid 2px" }}
            title="Graphic Design"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon={<BiGlobeAlt style={{ color: "#F61703" }} />}
            style={{ borderBottom: "#F61703 solid 2px" }}
            title="Web Design"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon={<FiDatabase style={{ color: "#F6C003" }} />}
            style={{ borderBottom: "#F6C003 solid 2px" }}
            title="Software"
          />
        </div>
        <div className="col-md-6">
          <Card
            icon={<AiOutlineMobile style={{ color: "#0363F6" }} />}
            style={{ borderBottom: "#0363F6 solid 2px" }}
            title="Application"
          />
        </div>
      </div>
    </div>
  );
};
export default About;
