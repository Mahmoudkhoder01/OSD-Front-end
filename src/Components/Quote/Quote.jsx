import classes from "./Quote.module.css";
import { AiOutlineClose } from "react-icons/ai";

const Quote = () => {
  return (
    <div className={classes.quoteWrapper}>
      <em>"Anything that can go wrong, will go wrong"</em>
      <AiOutlineClose color="white" size={35} className={classes.closeIcon} />
    </div>
  );
};

export default Quote;
