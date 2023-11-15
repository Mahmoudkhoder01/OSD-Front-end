import { useState } from "react";
import classes from "./TodoCreateCard.module.css";
import { FaSave } from "react-icons/fa";

const TodoCreateCard = () => {
  const [data, setData] = useState({
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
  });

  const [error, setError] = useState({
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
    general: "",
  });

  const handleInputChange = (field, value) => {
    setData((prevTodo) => ({
      ...prevTodo,
      [field]: value,
    }));

    setError((prevError) => ({
      ...prevError,
      [field]: "",
      general: "",
    }));
  };

  const handleSaveClick = () => {
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
    } catch (error) {}
  };

  return (
    <div className={classes.cardWrapper}>
      <div className={classes.titleAndIcon}>
        <div>
          <input
            type="text"
            value={data.title}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("title", e.target.value)}
          />
          {error.title && <div className={classes.error}>{error.title}</div>}
        </div>
        <FaSave
          color="white"
          size={20}
          onClick={handleSaveClick}
          className={classes.saveIcon}
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
          {error.category && (
            <div className={classes.error}>{error.category}</div>
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Due date</label>

          <input
            type="date"
            value={data.dueDate}
            className={classes.todoInput}
            onChange={(e) => handleInputChange("dueDate", e.target.value)}
          />
          {error.dueDate && (
            <div className={classes.error}>{error.dueDate}</div>
          )}
        </div>
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Estimate</label>

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
        <div className={classes.inputDetails}>
          <label className={classes.labelTodo}>Importance</label>

          <select
            value={data.importance}
            onChange={(e) => handleInputChange("importance", e.target.value)}
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
      </div>
      {error.general && <div className={classes.error}>{error.general}</div>}
    </div>
  );
};

export default TodoCreateCard;
