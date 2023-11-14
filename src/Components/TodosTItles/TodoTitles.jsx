import classes from "./TodoTitles.module.css";
import { LuListTodo } from "react-icons/lu";
import { BiCheckCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import TodoCard from "../TodoCard/TodoCard";

const TodoTitles = ({ titleStatus, data, onDrop }) => {
  const statusIcons = {
    "To Do": <GiHamburgerMenu size={30} color="#8E7AD2" />,
    Doing: <LuListTodo size={30} color="#FE913E" />,
    Done: <BiCheckCircle size={30} color="#39AC95" />,
  };

  const statusIcon = statusIcons[titleStatus];

  const handleDrop = (event) => {
    event.preventDefault();

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
  };

  return (
    <div
      className={classes.todoWrapper}
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div className={classes.status}>
        {statusIcon}
        {titleStatus}
      </div>

      {/* Render "To Do" tasks */}
      {data.map((todo, index) => (
        <TodoCard
          key={index}
          titleStatus={titleStatus}
          todoTitle={todo.title}
          categoryValue={todo.category}
          dueDateValue={todo.dueDate}
          estimateValue={todo.estimate}
          importanceValue={todo.importance}
        />
      ))}
    </div>
  );
};

export default TodoTitles;
