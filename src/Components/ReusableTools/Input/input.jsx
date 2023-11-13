import classes from "./input.module.css";

const Input = ({ label, type, value, name, onChange }) => {
  return (
    <div className={classes.inputContainer}>
      <label className={classes.label}>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={classes.input}
        name={name}
      />
    </div>
  );
};

export default Input;
