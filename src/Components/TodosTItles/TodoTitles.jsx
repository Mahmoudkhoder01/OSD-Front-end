import classes from "./TodoTitles.module.css";
import { LuListTodo } from "react-icons/lu";
import { BiCheckCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import TodoCard from "../TodoCard/TodoCard";
import { useState } from "react";
import TodoCreateCard from "../TodoCreateCard/TodoCreateCard";

const TodoTitles = ({
  titleStatus,
  details,
  onDrop,
  isEdit,
  setIsEdit,
  isCreate,
  reFetch,
  setIsCreate,
  isLoading,
  setIsLoading,
  isQuote,
}) => {
  const statusIcons = {
    "To Do": <GiHamburgerMenu size={30} color="#8E7AD2" />,
    Doing: <LuListTodo size={30} color="#FE913E" />,
    Done: <BiCheckCircle size={30} color="#39AC95" />,
  };

  const statusIcon = statusIcons[titleStatus];

  const [cardData, setCardData] = useState({
    id: "",
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
    status: "",
  });

  const handleDragStart = (event, todo) => {
    // Set the dragged data based on the todo item
    const dragData = {
      id: todo.id,
      title: todo.title,
      category: todo.category,
      dueDate: todo.dueDate,
      estimate: todo.estimate,
      importance: todo.importance,
      status: todo.status,
    };

    // Set the data to be transferred during the drag operation
    event.dataTransfer.setData("text/plain", JSON.stringify(dragData));
  };

  const handleDrop = (event) => {
    event.preventDefault();
    console.log("before dropped");
    // Get the dragged data from the event
    const draggedDataString = event.dataTransfer.getData("text/plain");

    // Check if the dragged data string is not empty
    if (draggedDataString) {
      const draggedData = JSON.parse(draggedDataString);

      console.log("dropped");

      // Call the onDrop function with the dragged data and the title status
      onDrop(draggedData, titleStatus);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    console.log("Drag over");
  };

  const handleEditClick = (todo, cardIndex) => {
    setCardData({
      id: todo.id,
      title: todo.title,
      category: todo.category,
      dueDate: todo.dueDate,
      estimate: todo.estimate,
      importance: todo.importance,
      status: todo.status,
    });
    setIsEdit(cardIndex);
  };

  const handleSaveClick = (cardIndex) => {
    setIsEdit(null);
  };

  return (
    <div
      className={classes.todoWrapper}
      // onDragStart={(event) => handleDragStart(event, todo)}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div
        className={classes.status}
        style={{
          top: isQuote ? "170px" : "120px",
          marginBottom: !isQuote && "20px",
        }}
      >
        {statusIcon}
        {titleStatus}
      </div>

      {isCreate && (
        <TodoCreateCard
          setIsCreate={setIsCreate}
          reFetch={reFetch}
          isLoading={isLoading}
          setIsLoading={setIsLoading}
        />
      )}

      {/* Render "To Do" tasks */}
      {details.map((todo, index) => (
        <TodoCard
          key={index}
          titleStatus={titleStatus}
          todoTitle={todo.title}
          categoryValue={todo.category}
          dueDateValue={todo.dueDate}
          estimateValue={todo.estimate}
          importanceValue={todo.importance}
          isEdit={index === isEdit}
          setIsEdit={
            index === isEdit
              ? handleSaveClick
              : () => handleEditClick(todo, index)
          }
          cardIndex={index}
          data={cardData}
          setData={setCardData}
          reFetch={reFetch}
          isLoading={isLoading}
          onDragStart={(event) => handleDragStart(event, todo)}
          setIsLoading={setIsLoading}
        />
      ))}
    </div>
  );
};

export default TodoTitles;
