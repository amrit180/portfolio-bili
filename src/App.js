import "./App.css";
import Home from "./pages/Home";
import { Route } from "react-router-dom";
import "antd/dist/antd.css";
import { BackTop } from "antd";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div className="App">
      {/* <SideBar /> */}
      <Route exact path="/" component={Home} />
      <BackTop />
    </div>
  );
}

export default App;
