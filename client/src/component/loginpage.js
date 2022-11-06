import "../css/loginpage.css";
import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [user, setUser] = useState({});
  const login = async (e) => {
    e.preventDefault();
    console.log(user);
    try {
      const { data: res } = await axios.post("/login", user);

      //console.log(res.token)
      localStorage.setItem("token", res.token);
      alert("login successfully");
      navigate("/home");
    } catch (error) {
      if (
        error.response &&
        error.response.status >= 400 &&
        error.response.status <= 500
      ) {
        alert("invalid credential");
      }
    }
  };

  return (
    <>
      <div className="background">
        <div className="login-btn">
          <form action="/login" method="post" className="container">
            <label htmlFor="email">
              <b>Email</b>
            </label>
            <input
              className="in"
              type="email"
              placeholder="Enter Email"
              onChange={(e) => setUser({ ...user, email: e.target.value })}
              name="email"
              required
            />

            <label htmlFor="password">
              <b>Password</b>
            </label>
            <input
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setUser({ ...user, password: e.target.value })}
              name="password"
              required
            />

            <button type="submit" onClick={login} className="btn">
              Login
            </button>
            <Link to="/register">New user</Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
