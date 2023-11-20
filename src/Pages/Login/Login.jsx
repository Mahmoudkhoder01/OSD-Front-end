import classes from "./Login.module.css";
import loginImage from "../../Images/login-image.png";
import Input from "../../Components/ReusableTools/Input/Input";
import { useState } from "react";
import Button from "../../Components/ReusableTools/Button/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [submit, setSubmit] = useState(false);

  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState("");

  const handleLogin = async () => {
    try {
      setSubmit(true);

      const resp = await axios.post("https://localhost:7054/api/Auth/login", {
        email: data.email,
        password: data.password,
      });

      setSubmit(false);

      navigate("/");

      localStorage.setItem("user", JSON.stringify(resp.data.user));

      localStorage.setItem("token", JSON.stringify(resp.data.token));
    } catch (error) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };

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
        <div style={{ width: "50%" }}>
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
          {error && <div className={classes.error}>{error}</div>}
          <Button
            text={submit ? "Submitting..." : "Sign In"}
            onClick={handleLogin}
          />
        </div>
      </div>
    </div>
  );
};

export default Login;
