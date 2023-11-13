import classes from "./TodoTitles.module.css";
import { LuListTodo } from "react-icons/lu";
import { BiCheckCircle } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import { useState } from "react";
import TodoCard from "../TodoCard/TodoCard";

const TodoTitles = ({ titleStatus, data, setData }) => {
  const statusIcons = {
    "To Do": <GiHamburgerMenu size={30} color="#8E7AD2" />,
    Doing: <LuListTodo size={30} color="#FE913E" />,
    Done: <BiCheckCircle size={30} color="#39AC95" />,
  };

  const statusIcon = statusIcons[titleStatus];

  return (
    <div className={classes.todoWrapper}>
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
          details={todo.details}
        />
      ))}
    </div>
  );
};

export default TodoTitles;
