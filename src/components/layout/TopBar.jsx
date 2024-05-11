import { Form } from "react-bootstrap";
import card_view from "../../assets/icons/card_view.png";
import list_view from "../../assets/icons/list_view.png";
import { productView } from "../../constants/appConstant";

const TopBar = ({ activeView, onChangeView }) => {
  return (
    <div className="top-bar d-flex flex-row justify-content-between ">
      <div className="d-flex gap-1">
        <button
          className={
            activeView === productView.card ? "active-btn" : "default-btn"
          }
          title="Card View"
          onClick={() => {
            onChangeView(productView.card);
          }}
        >
          <img className="view-icon" src={card_view} />
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
          <img className="view-icon" src={list_view} />
        </button>
      </div>

      <div className="d-flex flex-row gap-2 mt-1">
        <div className="mt-1">
          <span className="opacity-75">Sort by:</span>
        </div>

        <div className="custom-select opacity-75">
          <Form.Select className="custom-select" size="sm">
            <option href="#">Default</option>
            <option href="#">{"Price (Low > High)"}</option>
            <option href="#">{"Price (High > Low)"}</option>
          </Form.Select>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
