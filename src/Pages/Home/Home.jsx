import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Profile from "../../Components/Profile/Profile";
import Quote from "../../Components/Quote/Quote";
import { Loading } from "../../Components/ReusableTools/Loading/Loading";
import TodoTitles from "../../Components/TodosTItles/TodoTitles";
import classes from "./Home.module.css";

const Home = () => {
  const storedUser = localStorage.getItem("user");

  const userInfo = JSON.parse(storedUser);

  const [isLoading, setIsLoading] = useState(false);

  const [isCreate, setIsCreate] = useState(false);

  const [isEditToDo, setIsEditToDo] = useState(null);

  const [isEditDoing, setIsEditDoing] = useState(null);

  const [isEditDone, setIsEditDone] = useState(null);

  const [toDoData, setToDoData] = useState([]);

  const [doingData, setDoingData] = useState([]);

  const [doneData, setDoneData] = useState([]);

  const fetchData = async () => {
    try {
      const resp = await axios.get(
        `https://localhost:7054/api/Todo/${userInfo.id}`
      );

      setToDoData(resp.data.todosTodo);
     
      setDoingData(resp.data.todosDoing);
     
      setDoneData(resp.data.todosDone);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDrop = (draggedData, targetStatus) => {
    if (targetStatus === "To Do") {
      setToDoData((prevData) => [...prevData, draggedData]);
    } else if (targetStatus === "Doing") {
      setDoingData((prevData) => [...prevData, draggedData]);
    } else if (targetStatus === "Done") {
      setDoneData((prevData) => [...prevData, draggedData]);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.homePge}>
      <Nav setIsCreate={setIsCreate} isCreate={isCreate} />
      <div>
        <Quote />
        <div style={{ display: "flex" }}>
          <TodoTitles
            titleStatus="To Do"
            details={toDoData}
            setDetailsData={setToDoData}
            onDrop={(draggedData) => handleDrop(draggedData, "To Do")}
            isEdit={isEditToDo}
            setIsEdit={(cardIndex) => setIsEditToDo(cardIndex)}
            isCreate={isCreate}
            reFetch={fetchData}
            setIsCreate={setIsCreate}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <TodoTitles
            titleStatus="Doing"
            details={doingData}
            setDetailsData={setDoingData}
            onDrop={(draggedData) => handleDrop(draggedData, "Doing")}
            isEdit={isEditDoing}
            setIsEdit={(cardIndex) => setIsEditDoing(cardIndex)}
            reFetch={fetchData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />

          <TodoTitles
            titleStatus="Done"
            details={doneData}
            setDetailsData={setDoneData}
            onDrop={(draggedData) => handleDrop(draggedData, "Done")}
            isEdit={isEditDone}
            setIsEdit={(cardIndex) => setIsEditDone(cardIndex)}
            reFetch={fetchData}
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
