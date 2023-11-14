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
  data,
  setData,
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
    setData({
      title: data.title,
      category: data.category,
      dueDate: data.dueDate,
      estimate: data.estimate,
      importance: data.importance,
    });
    setIsEdit(null);
  };

  const handleInputChange = (field, value) => {
    setData((prevTodo) => ({
      ...prevTodo,
      [field]: value,
    }));
  };

  return (
    <div className={classes.cardWrapper} draggable>
      <div className={classes.titleAndIcon}>
        {!isEdit ? (
          <div className={classes.todoTitle}>{todoTitle}</div>
        ) : (
          <input
            type="text"
            value={data.title}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
        )}
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
          {!isEdit ? (
            <div className={classes.value}>{categoryValue}</div>
          ) : (
            <input
              type="text"
              value={data.category}
              className={classes.todoInput}
              onChange={(e) => handleInputChange("category", e.target.value)}
            />
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Due date</label>
          {!isEdit ? (
            <div className={classes.value}>{dueDateValue}</div>
          ) : (
            <input
              type="date"
              value={data.dueDate}
              className={classes.todoInput}
              onChange={(e) => handleInputChange("dueDate", e.target.value)}
            />
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Estimate</label>
          {!isEdit ? (
            <div className={classes.value}>{estimateValue}</div>
          ) : (
            <input
              type="text"
              value={data.estimate}
              className={classes.todoInput}
              onChange={(e) => handleInputChange("estimate", e.target.value)}
            />
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Importance</label>
          {!isEdit ? (
            <div className={classes.value} style={valueStyle}>
              {importanceValue}
            </div>
          ) : (
            <input
              type="text"
              value={data.importance}
              className={classes.todoInput}
              onChange={(e) => handleInputChange("importance", e.target.value)}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
