import { useState } from "react";
import classes from "./TodoCreateCard.module.css";


const TodoCreateCard = ({}) => {
  const [data, setData] = useState({
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
  });

  const handleInputChange = (field, value) => {
    setData((prevTodo) => ({
      ...prevTodo,
      [field]: value,
    }));
    return;
  };

  return (
    <div className={classes.cardWrapper} draggable>
      <div className={classes.titleAndIcon}>
        <input
          type="text"
          value={data.title}
          className={classes.todoInput}
          onChange={(e) => handleInputChange("title", e.target.value)}
        />
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Category</label>

          <input
            type="text"
            value={data.category}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("category", e.target.value)}
          />
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Due date</label>

          <input
            type="date"
            value={data.dueDate}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("dueDate", e.target.value)}
          />
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Estimate</label>

          <input
            type="text"
            value={data.estimate}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("estimate", e.target.value)}
          />
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Importance</label>

          <select>
            <option>High</option>
            <option>Medium</option>
            <option>Low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default TodoCreateCard;
