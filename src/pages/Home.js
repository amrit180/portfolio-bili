import About from "../components/About";
import Carousel from "../components/Carousel";
import Countdown from "../components/Countdown";
import Education from "../components/Education";
import Expreince from "../components/Expreince";
import Services from "../components/Services";
import Skills from "../components/Skills";
import Work from "../components/Work";
import Navbar from "../nav/Navbar";
import Contact from "../components/Contact";

const Home = () => {
  return (
    <>
      <div className="navgrid container">
        <div className="flexcol">
          <Navbar />
        </div>
        <div className="home mr-5">
          <Carousel />
          <About />
          <Services />
          <Countdown />
          <Skills />
          <Education />
          <Expreince />
          <Work />
          <Contact />
        </div>
      </div>
    </>
  );
};
export default Home;
