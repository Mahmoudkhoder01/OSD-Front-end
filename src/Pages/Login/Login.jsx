import classes from "./Login.module.css";
import loginImage from "../../Images/login-image.png";

const Login = () => {
  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginImageWrapper}>
        <img src={loginImage} alt="login-img" className={classes.loginImage} />
      </div>
      <div className={classes.loginForm}>
        <p>hhhhhhhh</p>
      </div>
    </div>
  );
};

export default Login;
