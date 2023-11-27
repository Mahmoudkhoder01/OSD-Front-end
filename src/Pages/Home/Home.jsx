import axios from "axios";
import { useEffect, useState } from "react";
import Nav from "../../Components/Nav/Nav";
import Profile from "../../Components/Profile/Profile";
import Quote from "../../Components/Quote/Quote";
import { Loading } from "../../Components/ReusableTools/Loading/Loading";
import TodoTitles from "../../Components/TodosTItles/TodoTitles";
import classes from "./Home.module.css";
import { FaCircleInfo } from "react-icons/fa6";

const Home = () => {
  const storedUser = localStorage.getItem("user");

  const userInfo = JSON.parse(storedUser);

  const [isLoading, setIsLoading] = useState(false);

  const [isQuote, setIsQuote] = useState(true);

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

  const handleDrop = async (draggedData, targetStatus) => {
    try {
      const status = targetStatus === "To Do" ? "Todo" : targetStatus;

      await axios.put(`https://localhost:7054/api/Todo`, {
        id: draggedData.id,
        title: draggedData.title,
        category: draggedData.category,
        dueDate: draggedData.dueDate,
        estimate: draggedData.estimate,
        importance: draggedData.importance,
        status: status,
      });

      fetchData();
    } catch (error) {
      console.error("Error updating todo status:", error.message);
    }
  };

  if (isLoading) {
    return <Loading />;
  }

  return (
    <div className={classes.homePge}>
      <Nav setIsCreate={setIsCreate} isCreate={isCreate} />
      <div>
        {isQuote && <Quote setIsQuote={setIsQuote} />}
        <div className={classes.container}>
          <div style={{ display: "flex", flex: 1 }}>
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
              isQuote={isQuote}
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
              isQuote={isQuote}
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
              isQuote={isQuote}
            />
          </div>
          {!isQuote && (
            <FaCircleInfo
              className={classes.infoIcon}
              size={20}
              color="white"
              onClick={() => setIsQuote(!isQuote)}
              style={{ top: !isQuote ? "120px" : "170px" }}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
