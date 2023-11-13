import classes from "./Login.module.css";
import loginImage from "../../Images/login-image.png";
import Input from "../../Components/ReusableTools/Input/Input";
import { useState } from "react";
import Button from "../../Components/ReusableTools/Button/Button";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={classes.loginWrapper}>
      <div className={classes.loginImageWrapper}>
        <img src={loginImage} alt="login-img" className={classes.loginImage} />
      </div>
      <div className={classes.loginForm}>
        <div style={{width: "50%"}}>
          <h1 className={classes.title}>Time To Work!</h1>
          <Input
            type="text"
            label="Email"
            name="email"
            value={data.email}
            onChange={handleChange}
          />
          <Input
            type="password"
            label="Password"
            name="password"
            value={data.password}
            onChange={handleChange}
          />
          <Button text={"Sign In"} />
        </div>
      </div>
    </div>
  );
};

export default Login;
