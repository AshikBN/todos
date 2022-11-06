import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Sidebar from "./sidebar";

export default function Addpost() {
  const Navigate = useNavigate();
  const handleLogout = () => {
    localStorage.clear();
    Navigate("/");
  };

  const [user, setUser] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();

    const { activity } = user;
    console.log(user);
    if (activity) {
      axios
        .post("/posts", user, {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            authentication: localStorage.getItem("token"),
          },
        })
        .then((res) => {
          alert("posted successfully");
          if (res.status === 200) {
            Navigate("/home");
          }
        });
    } else {
      alert("invalid input");
    }
  };

  return (
    <>
      <header className="header">
        <div>
          <Sidebar />
        </div>
        <button className="logout" onClick={handleLogout}>
          Logout
        </button>
      </header>
      <form method="POST" onSubmit={handleSubmit}>
        <label>Activity</label>
        <input
          activity="activity"
          onChange={(e) => setUser({ ...user, activity: e.target.value })}
          placeholder="type_activity"
          type="text"
          required
        />

        <input type="submit" className="submitbutton" />
      </form>
    </>
  );
}
