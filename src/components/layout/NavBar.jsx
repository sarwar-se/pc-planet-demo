import { Tab, Tabs } from "react-bootstrap";

const NavigationBar = () => {
  return (
    <div className="custom-navbar">
      <Tabs className="">
        <Tab title="Component"></Tab>
        <Tab title="Monitor"></Tab>
        <Tab title="UPS"></Tab>
        <Tab title="Camera"></Tab>
      </Tabs>
    </div>
  );
};

export default NavigationBar;
