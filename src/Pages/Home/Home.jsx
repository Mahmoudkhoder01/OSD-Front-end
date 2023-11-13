import Nav from "../../Components/Nav/Nav";
import Quote from "../../Components/Quote/Quote";
import TodoCard from "../../Components/TodosCard/TodoCard";
import classes from "./Home.module.css";

const Home = () => {
  return (
    <div className={classes.homePge}>
      <Nav />
      <div>
        <Quote />
        <TodoCard />
      </div>
    </div>
  );
};

export default Home;
