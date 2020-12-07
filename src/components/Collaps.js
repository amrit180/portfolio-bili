import { Collapse } from "antd";

const { Panel } = Collapse;

const Collaps = () => {
  return (
    <div className="ml-5 mt-5 mr-2 mb-5">
      <Collapse accordion>
        <Panel header="MASTER DEGREE GRAPHIC DESIGN" key="1">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Panel>
        <Panel header="BACHELOR OF DEGREE COMPUTER SCIENCE " key="2">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Panel>
        <Panel header="DIPLOMA IN INFORMATION TECHNOLOGY" key="3">
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </Panel>
      </Collapse>
    </div>
  );
};

export default Collaps;
