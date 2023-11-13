import classes from "./Login.module.css";
import loginImage from "../../Images/login-image.png";

const Login = () => {
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginImageWrapper}>
        <img src={loginImage} alt="login-img" className={classes.loginImage} />
      </div>
      <div className={classes.loginForm}>
        <h1 className={classes.title}>Time To Work!</h1>
      </div>
    </div>
  );
};

export default Login;
