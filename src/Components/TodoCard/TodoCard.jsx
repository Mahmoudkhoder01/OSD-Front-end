import classes from "./TodoCard.module.css";
import { FiEdit2 } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { useState } from "react";

const TodoCard = ({
  todoTitle,
  categoryValue,
  dueDateValue,
  estimateValue,
  importanceValue,
  isEdit,
  setIsEdit,
  cardIndex,
}) => {
  const getImportanceColor = (importportance) => {
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

  const handleEditClick = () => {
    setIsEdit(cardIndex);
  };

  const handleSaveClick = () => {
    setIsEdit(null);
  };

  return (
    <div className={classes.cardWrapper} draggable>
      <div className={classes.titleAndIcon}>
        <input
          type="text"
          value={todoTitle}
          className={classes.todoInput}
          readOnly={!isEdit} // Make the input read-only when not in edit mode
        />
        <div className={classes.editMode}>
          <FiEdit2 color="white" size={20} onClick={handleEditClick} />
          {isEdit && (
            <FaSave color="white" size={20} onClick={handleSaveClick} />
          )}
        </div>
      </div>
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
