import { Form } from "react-bootstrap";

const LeftCard = ({ title = "UNKNOWN" }) => {
  const type = "checkbox";
  return (
    <div className="left-card">
      <div className="left-card-title">
        <span>{title}</span>
      </div>

      <div className="left-card-body">
        <Form>
          <Form.Check label="One" type={type} name="check" id={"one"} />
          <Form.Check label="two" type={type} name="check" id={"two"} />
          <Form.Check label="three" type={type} name="check" id={"three"} />
        </Form>
      </div>
    </div>
  );
};

export default LeftCard;
