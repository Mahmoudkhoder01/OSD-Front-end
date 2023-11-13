import classes from "./input.module.css";

const input = ({ label, type, value, onChange }) => {
  return (
    <>
      <label>{label}</label>
      <input type={type} value={value} onChange={onChange} />
    </>
  );
};

export default input;
