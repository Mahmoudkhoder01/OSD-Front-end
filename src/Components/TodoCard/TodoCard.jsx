import classes from "./TodoCard.module.css";

const TodoCard = ({
  todoTitle,
  categoryLabel,
  categoryValue,
  dueDateLabel,
  dueDateValue,
  estimateLabel,
  estimateValue,
  importanceLabel,
  importanceValue,
}) => {
  return (
    <div className={classes.cardWrapper}>
      <input type="text" value={todoTitle} className={classes.todoInput} />
      <div className={classes.inputContainer}>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>{categoryLabel}</label>
          <div>{categoryValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>{dueDateLabel}</label>
          <div>{dueDateValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>{estimateLabel}</label>
          <div>{estimateValue}</div>
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>{importanceLabel}</label>
          <div>{importanceValue}</div>
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
