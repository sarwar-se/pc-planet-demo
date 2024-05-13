import GroupButton from "../pattern/GroupButton";

const LeftCard = ({
  title = "UNKNOWN",
  values,
  filterType,
  filterHandler,
  groupType,
  selectedValues,
}) => {
  return (
    <div className="left-card">
      <div className="left-card-title">
        <span>{title}</span>
      </div>

      <div className="left-card-body">
        <GroupButton
          values={values}
          filterType={filterType}
          filterHandler={filterHandler}
          groupType={groupType}
          selectedValues={selectedValues}
        />
      </div>
    </div>
  );
};

export default LeftCard;
