import classes from "./TodoCard.module.css";
import { FiEdit2 } from "react-icons/fi";
import { FaSave } from "react-icons/fa";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import axios from "axios";

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
  reFetch,
  setIsLoading,
  onDragStart,
}) => {
  const storedUser = localStorage.getItem("user");

  const userInfo = JSON.parse(storedUser);

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

  const [error, setError] = useState({
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
    general: "",
  });

  const importanceColor = getImportanceColor(importanceValue);

  const valueStyle = {
    backgroundColor: importanceColor,
    padding: "10px",
    borderRadius: "5px",
  };

  const handleEditClick = () => {
    setIsEdit(cardIndex);
  };

  useEffect(() => {
    if (isEdit) {
      // Initialize localData with empty values when in create mode
      setData({
        id: data.id,
        title: data.title,
        category: data.category,
        dueDate: data.dueDate,
        estimate: data.estimate,
        importance: data.importance,
        status: data.status,
      });
    }
  }, [isEdit]);

  const handleSaveClick = async () => {
    try {
      if (
        !data.title &&
        !data.category &&
        !data.dueDate &&
        !data.estimate &&
        !data.importance
      ) {
        setError((prevError) => ({
          ...prevError,
          general: "Please fill all fields",
        }));
        return;
      }

      const errorFields = [];

      if (!data.title) {
        setError((prevError) => ({
          ...prevError,
          title: "Title is required",
        }));
        errorFields.push("Title");
      } else if (data.title.length < 3) {
        setError((prevError) => ({
          ...prevError,
          title: "Title should be at least 3 characters",
        }));
        errorFields.push("Title");
      }

      if (!data.category) {
        setError((prevError) => ({
          ...prevError,
          category: "Category is required",
        }));
        errorFields.push("Category");
      } else if (data.category.length < 3) {
        setError((prevError) => ({
          ...prevError,
          category: "Category should be at least 3 characters",
        }));
        errorFields.push("Category");
      }

      if (!data.dueDate) {
        setError((prevError) => ({
          ...prevError,
          dueDate: "Date is required",
        }));
        errorFields.push("Date");
      } else if (data.dueDate.length < 3) {
        setError((prevError) => ({
          ...prevError,
          dueDate: "Date should be at least 3 characters",
        }));
        errorFields.push("Date");
      } else {
        const inputDate = new Date(data.dueDate);
        const currentDate = new Date();
        currentDate.setHours(0, 0, 0, 0);

        if (inputDate.getTime() < currentDate.getTime()) {
          setError((prevError) => ({
            ...prevError,
            dueDate: "Date should not be in the past.",
          }));
          errorFields.push("Date");
        }
      }

      if (!data.estimate) {
        setError((prevError) => ({
          ...prevError,
          estimate: "Estimate is required",
        }));
        errorFields.push("Estimate");
      } else {
        // Use regular expression to check if the estimate is in the format of hours
        const estimateRegex = /^\d+(\.\d+)?\s*hours?$/i;

        if (!estimateRegex.test(data.estimate)) {
          setError((prevError) => ({
            ...prevError,
            estimate:
              "Estimate should be in the format of hours (e.g., 8 hours)",
          }));
          errorFields.push("Estimate");
        }
      }

      if (!data.importance) {
        setError((prevError) => ({
          ...prevError,
          importance: "Please select an importance level",
        }));
        errorFields.push("Importance");
      }

      if (errorFields.length > 0) {
        return;
      }

      setIsLoading(true);

      const requestData = {
        id: data.id,
        title: data.title,
        category: data.category,
        dueDate: data.dueDate,
        estimate: data.estimate,
        importance: data.importance,
        status: data.status,
        userId: userInfo.id,
      };

      await axios.put("https://localhost:7054/api/Todo", requestData);

      setIsEdit(null);

      reFetch();

      setIsLoading(false);
    } catch (error) {
      console.log(error.message);
    }
  };

  const handleInputChange = (field, value) => {
    setData((prevTodo) => ({
      ...prevTodo,
      [field]: value,
    }));
    return;
  };

  return (
    <div className={classes.cardWrapper} draggable onDragStart={onDragStart}>
      <div className={classes.titleAndIcon}>
        {!isEdit ? (
          <div className={classes.todoTitle}>{todoTitle}</div>
        ) : (
          <div>
            <input
              type="text"
              value={data.title}
              className={classes.todoInput}
              onChange={(e) => handleInputChange("title", e.target.value)}
            />
            {error.title && <div className={classes.error}>{error.title}</div>}
          </div>
        )}
        <div className={classes.editMode}>
          {!isEdit ? (
            <FiEdit2 color="white" size={20} onClick={handleEditClick} />
          ) : (
            <div>
              <AiOutlineClose
                color="white"
                size={20}
                onClick={handleEditClick}
              />
              <FaSave color="white" size={20} onClick={handleSaveClick} />
            </div>
          )}
        </div>
      </div>
      <div className={classes.inputContainer}>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Category</label>
          {!isEdit ? (
            <div className={classes.value}>{categoryValue}</div>
          ) : (
            <div className={classes.inputWithError}>
              <input
                type="text"
                value={data.category}
                className={classes.todoInput}
                onChange={(e) => handleInputChange("category", e.target.value)}
              />
              {error.category && (
                <div className={classes.error}>{error.category}</div>
              )}
            </div>
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Due date</label>
          {!isEdit ? (
            <div className={classes.value}>{dueDateValue.split("T")[0]}</div>
          ) : (
            <div className={classes.inputWithError}>
              <input
                type="date"
                value={data.dueDate.split("T")[0]}
                className={classes.todoInput}
                onChange={(e) => handleInputChange("dueDate", e.target.value)}
              />
              {error.dueDate && (
                <div className={classes.error}>{error.dueDate}</div>
              )}
            </div>
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Estimate</label>
          {!isEdit ? (
            <div className={classes.value}>{estimateValue}</div>
          ) : (
            <div className={classes.inputWithError}>
              <input
                type="text"
                value={data.estimate}
                className={classes.todoInput}
                onChange={(e) => handleInputChange("estimate", e.target.value)}
              />
              {error.estimate && (
                <div className={classes.error}>{error.estimate}</div>
              )}
            </div>
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Importance</label>
          {!isEdit ? (
            <div className={classes.value} style={valueStyle}>
              {importanceValue}
            </div>
          ) : (
            <div className={classes.inputWithError}>
              <select
                value={data.importance}
                onChange={(e) =>
                  handleInputChange("importance", e.target.value)
                }
              >
                <option value="">Select an option</option>
                <option value="High">High</option>
                <option value="Medium">Medium</option>
                <option value="Low">Low</option>
              </select>
              {error.importance && (
                <div className={classes.error}>{error.importance}</div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoCard;
