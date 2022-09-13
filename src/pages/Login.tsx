import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { actionCreators } from "../state";
import { useNavigate } from 'react-router-dom';
import "./Login.css";

const LoginPageMain = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const { data, error, loading } = useSelector((state: any) => state["login"]);
  const dispatch: any = useDispatch();
  const navigate = useNavigate();
  if(data?.authToken) navigate('/landingPage');
  console.log("data", data);

  const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    console.log("userName", userName);
    event.preventDefault();
    dispatch(actionCreators.loginRemoteDataSource(userName, password));
  };



  return (
    <div>
      <form id="login_form" className="form-center" onSubmit={handleOnSubmit}>
        <div className="div-card">
          <h1>Login</h1>
          <input
            id="login_username"
            className="input"
            type={"text"}
            onChange={(e) => setUserName(e.target.value)}
            placeholder={"Enter your username"}
          ></input>
          <input
            id="login_password"
            className="input"
            type={"password"}
            onChange={(e) => setPassword(e.target.value)}
            placeholder={"Enter your password"}
          ></input>
          <button id="login_button" className="button">
            Login
          </button>
          {data?.authToken && <h2>Success</h2>}
          {data?.message && <h2>{data?.message}</h2>}
        </div>
      </form>
    </div>
  );
};

export default LoginPageMain;
