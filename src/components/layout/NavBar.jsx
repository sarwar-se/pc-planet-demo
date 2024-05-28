import { Tab, Tabs } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "../../constants/appRoutes";

const NavigationBar = ({ data = [] }) => {
  const navigate = useNavigate();
  return (
    <>
      <div className="custom-navbar bg-white border fw-bold">
        <Tabs
          className="container custom-tabs"
          defaultActiveKey={"none"}
          onSelect={(key) => {
            navigate(key);
          }}
        >
          <Tab eventKey={appRoutes.root} title="Component" />
          <Tab eventKey={appRoutes.category("monitor")} title="Monitor" />
          <Tab eventKey={appRoutes.category("ups")} title="UPS" />
          <Tab eventKey={appRoutes.category("camera")} title="Camera" />
        </Tabs>
      </div>
    </>
  );
};

export default NavigationBar;
