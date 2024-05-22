import { Form } from "react-bootstrap";
import { groupType } from "../../constants/appConstant";

const GroupButton = ({
  values,
  filterType,
  filterHandler,
  group,
  selectedValues,
}) => {
  return (
    <Form className="group-form">
      {values &&
        values.map((item, i) => (
          <Form.Check
            className="check-box"
            key={i}
            label={item}
            type={group}
            name={item}
            checked={
              group === groupType.checkBox
                ? selectedValues.includes(item)
                : selectedValues === item
            }
            onChange={() => {
              filterHandler(filterType, item);
            }}
          />
        ))}
    </Form>
  );
};

export default GroupButton;
