import Overlay from "./Overlay";
import { Tabs } from "antd";

const { TabPane } = Tabs;

const Work = (props) => {
  return (
    <div id="work">
      <p className="paraabout mt-5 ml-5">My Work</p>
      <h2 className="h3name mt-3 ml-5">Recent Work</h2>
      <Tabs
        defaultActiveKey="1"
        className=""
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <TabPane tab="Graphic " key="1">
          <Overlay
            link="https://image.freepik.com/free-psd/interior-living-room-frame-mockup_42637-1501.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-psd/tropical-foliage-background_53876-91352.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/landmarks-skyline-design-paper-style_23-2148411642.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/indian-ornate-maharajah-elephant_81894-708.jpg"
            title="heading link"
          />
        </TabPane>
        <TabPane tab="Web " key="2">
          <Overlay
            link="https://image.freepik.com/free-vector/gradient-dashboard-element-collection-template_23-2148361668.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/dashboard-element-collection_23-2148384873.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-psd/business-promotion-corporate-web-banner-template_120329-1249.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-psd/smartphone-laptop-pro-mockup_9462-265.jpg"
            title="heading link"
          />
        </TabPane>
        <TabPane tab="Software" key="3">
          <Overlay
            link="https://image.freepik.com/free-vector/code-testing-cartoon-banner-functional-test-methodology-programming-search-errors-bugs-website-platform-development-dashboard-usability-optimization-computer-pc-vector-illustration_107791-3766.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/app-development-illustration_52683-47931.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/application-pc-phone-with-business-graph-analytics-data_76964-144.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/mobile-app-development-background_73903-295.jpg"
            title="heading link"
          />
        </TabPane>
        <TabPane tab="Apps" key="4">
          <Overlay
            link="https://image.freepik.com/free-psd/full-screen-smartphone-mockup-design_53876-65968.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-psd/dark-smartphone-mockup_149660-807.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-psd/smartphone-with-social-media-screens-mockup_58466-12080.jpg"
            title="heading link"
          />
          <Overlay
            link="https://image.freepik.com/free-vector/smart-home-app-interface_23-2148626236.jpg"
            title="heading link"
          />
        </TabPane>
      </Tabs>
      ,
    </div>
  );
};
export default Work;
