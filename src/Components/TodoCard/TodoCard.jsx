import classes from "./TodoCard.module.css";

const TodoCard = ({
  todoTitle,
  categoryValue,
  dueDateValue,
  estimateValue,
  importanceValue,
}) => {
  const getImportanceColor = (importportance) => {
    // Define your color logic here based on the importanceValue
    // For example, you can assign specific colors to different importance levels
    if (importportance === "High") {
      return "#DC3545";
    } else if (importportance === "Medium") {
      return "#FE913E";
    } else if (importportance === "Low") {
      return "#39AC95";
    } else {
      return "transparent";
    }
  };

  const importanceColor = getImportanceColor(importanceValue);

  const valueStyle = {
    backgroundColor: importanceColor,
    padding: "10px",
    borderRadius: "5px",
  };

  return (
    <div className={classes.cardWrapper} draggable>
      <input
        type="text"
        value={todoTitle}
        className={classes.todoInput}
        readOnly
      />
      <div className={classes.inputContainer}>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Category</label>
          <div className={classes.value}>{categoryValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Due date</label>
          <div className={classes.value}>{dueDateValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Estimate</label>
          <div className={classes.value}>{estimateValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Importance</label>
          <div className={classes.value} style={valueStyle}>
            {importanceValue}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
