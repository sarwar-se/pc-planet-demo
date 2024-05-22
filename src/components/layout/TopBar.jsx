import { Form } from "react-bootstrap";
import { list_icon, grid_icon } from "../../assets/index.js";
import { productView, sortType } from "../../constants/appConstant";

const TopBar = ({ activeView, onChangeView, sortProducts }) => {
  return (
    <div className="top-bar d-flex flex-row justify-content-between ">
      <div className="d-flex gap-2">
        <button
          className={
            activeView === productView.card ? "active-btn" : "default-btn"
          }
          title="Card View"
          onClick={() => {
            onChangeView(productView.card);
          }}
        >
          <img className="view-icon" src={grid_icon} alt="grid icon" />
        </button>

        <button
          className={
            activeView === productView.list ? "active-btn" : "default-btn"
          }
          title="List View"
          onClick={() => {
            onChangeView(productView.list);
          }}
        >
          <img className="view-icon" src={list_icon} alt="list icon" />
        </button>
      </div>

      <div className="d-flex flex-row gap-2 mt-1">
        <div className="mt-1">
          <span className="opacity-75">Sort by:</span>
        </div>

        <div className="custom-select opacity-75">
          <Form.Select
            className="custom-select"
            size="sm"
            onChange={(e) => sortProducts(e.target.value)}
          >
            <option value={sortType.default}>Default</option>
            <option value={sortType.lowToHigh}>{"Price (Low > High)"}</option>
            <option value={sortType.highToLow}>{"Price (High > Low)"}</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
