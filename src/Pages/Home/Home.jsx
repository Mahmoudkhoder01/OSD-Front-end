import { useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Quote from "../../Components/Quote/Quote";
import TodoTitles from "../../Components/TodosTItles/TodoTitles";
import classes from "./Home.module.css";

const Home = () => {
  const [data, setData] = useState({
    title: "",
    category: "",
    dueDate: "",
    estimate: "",
    importance: "",
  });

  const [isEditToDo, setIsEditToDo] = useState(null);
  const [isEditDoing, setIsEditDoing] = useState(null);
  const [isEditDone, setIsEditDone] = useState(null);

  const [toDoData, setToDoData] = useState([
    {
      title: "Prepare the assay",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
    {
      title: "Prepare the assay",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
    {
      title: "Prepare the assay",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
  ]);

  const [doingData, setDoingData] = useState([
    {
      title: "Prepare the dddd",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
    {
      title: "Prepare the dddd",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
  ]);

  const [doneData, setDoneData] = useState([
    {
      title: "Prepare the dddd",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
    {
      title: "Prepare the dddd",
      category: "Email",
      dueDate: "2023-01-14",
      estimate: "8 hours",
      importance: "High",
    },
  ]);

  const handleDrop = (draggedData, targetStatus) => {
    if (targetStatus === "To Do") {
      setToDoData((prevData) => [...prevData, draggedData]);
    } else if (targetStatus === "Doing") {
      setDoingData((prevData) => [...prevData, draggedData]);
    } else if (targetStatus === "Done") {
      setDoneData((prevData) => [...prevData, draggedData]);
    }
  };

  return (
    <div className={classes.homePge}>
      <Nav />
      <div>
        <Quote />
        <div style={{ display: "flex" }}>
          <TodoTitles
            titleStatus="To Do"
            data={toDoData}
            setData={setToDoData}
            onDrop={(draggedData) => handleDrop(draggedData, "To Do")}
            isEdit={isEditToDo}
            setIsEdit={(cardIndex) => setIsEditToDo(cardIndex)}
          />

          <TodoTitles
            titleStatus="Doing"
            data={doingData}
            setData={setDoingData}
            onDrop={(draggedData) => handleDrop(draggedData, "Doing")}
            isEdit={isEditDoing}
            setIsEdit={(cardIndex) => setIsEditDoing(cardIndex)}
          />

          <TodoTitles
            titleStatus="Done"
            data={doneData}
            setData={setDoneData}
            onDrop={(draggedData) => handleDrop(draggedData, "Done")}
            isEdit={isEditDone}
            setIsEdit={(cardIndex) => setIsEditDone(cardIndex)}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
