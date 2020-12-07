const Skills = (props) => {
  return (
    <div id="skills">
      <p className="paraabout mt-5 ml-5">MY SPECIALTY</p>
      <h2 className="h3name mt-5 ml-5">MY SKILLS</h2>
      <p className="parawriting ml-5 mr-5">
        The Big Oxmox advised her not to do so, because there were thousands of
        bad Commas, wild Question Marks and devious Semikoli, but the Little
        Blind Text didn’t listen. She packed her seven versalia, put her initial
        into the belt and made herself on the way.
      </p>
      <div className="skill-bars ml-3 mt-5" data-aos="zoom-out">
        <div className="bar">
          <div className="info">
            <span>HTML</span>
          </div>
          <div className="progress-line html">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>CSS</span>
          </div>
          <div className="progress-line css">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>jQuery</span>
          </div>
          <div className="progress-line jquery">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>Python</span>
          </div>
          <div className="progress-line python">
            <span></span>
          </div>
        </div>
        <div className="bar">
          <div className="info">
            <span>MySQL</span>
          </div>
          <div className="progress-line mysql">
            <span></span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
