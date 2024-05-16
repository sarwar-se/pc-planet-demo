import { Tab, Tabs } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <>
      <div className="custom-navbar bg-white border fw-bold">
        <Tabs className="container custom-tabs" defaultActiveKey={"none"}>
          <Tab eventKey={"component"} title="Component" id="component" />
          <Tab eventKey={"monitor"} title="Monitor" id="monitor" />
          <Tab eventKey={"ups"} title="UPS" />
          <Tab eventKey={"camera"} title="Camera" />
        </Tabs>
      </div>
    </>
  );
};

export default NavigationBar;
