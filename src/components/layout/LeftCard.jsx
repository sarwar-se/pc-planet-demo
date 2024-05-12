import { Form } from "react-bootstrap";

const LeftCard = ({ title = "UNKNOWN", values }) => {
  const type = "checkbox";
  return (
    <div className="left-card">
      <div className="left-card-title">
        <span>{title}</span>
      </div>

      <div className="left-card-body">
        <Form>
          {values &&
            values.map((item, i) => (
              <Form.Check key={i} label={item} type={type} name="check" />
            ))}
        </Form>
      </div>
    </div>
  );
};

export default LeftCard;
