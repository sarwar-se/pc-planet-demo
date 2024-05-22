import { Tab, Tabs } from "react-bootstrap";

const NavigationBar = ({ data = [] }) => {
  return (
    <>
      <div className="custom-navbar bg-white border fw-bold">
        <Tabs className="container custom-tabs" defaultActiveKey={"none"}>
          <Tab eventKey={"component"} title="Component" />
          <Tab eventKey={"monitor"} title="Monitor" />
          <Tab eventKey={"ups"} title="UPS" />
          <Tab eventKey={"camera"} title="Camera" />
        </Tabs>
      </div>
    </>
  );
};

export default NavigationBar;
