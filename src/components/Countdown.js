import CountUp from "react-countup";

const Countdown = (props) => {
  return (
    <div id="third" style={{ marginBottom: "10%" }}>
      <div className="countdown row">
        <div className="col-md">
          <CountUp className="count" duration={10} end={309} />
          <br />
          <h5 className="h3name" style={{ color: "#fff", textAlign: "center" }}>
            Project
          </h5>
        </div>
        <div className="col-md">
          <CountUp className="count" duration={10} end={10} />
          <br />
          <h5 className="h3name" style={{ color: "#fff", textAlign: "center" }}>
            Internship
          </h5>
        </div>
        <div className="col-md">
          <CountUp className="count" duration={10} end={1} />
          <br />
          <h5 className="h3name" style={{ color: "#fff", textAlign: "center" }}>
            Jobs
          </h5>
        </div>
        <div className="col-md">
          <CountUp className="count" duration={10} end={100} />
          <br />
          <h5 className="h3name" style={{ color: "#fff", textAlign: "center" }}>
            assingment
          </h5>
        </div>
      </div>
    </div>
  );
};
export default Countdown;
