import { useState } from "react";
import GroupButton from "../pattern/GroupButton";

const LeftCard = ({
  title = "UNKNOWN",
  values,
  filterType,
  filterHandler,
  groupType,
  selectedValues,
}) => {
  const [expanded, setExpanded] = useState(true);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  return (
    <div className="left-card">
      <div className=" d-flex justify-content-between mt-1">
        <span className="fw-bold">{title}</span>
        <button className="toggle-button" onClick={toggleExpand}>
          {expanded ? (
            <i className="bi bi-chevron-up"></i>
          ) : (
            <i className="bi bi-chevron-down"></i>
          )}
        </button>
      </div>

      {expanded && (
        <div className="left-card-body">
          <GroupButton
            values={values}
            filterType={filterType}
            filterHandler={filterHandler}
            groupType={groupType}
            selectedValues={selectedValues}
          />
        </div>
      )}
    </div>
  );
};

export default LeftCard;
