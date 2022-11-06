import '../css/home.css';
import Sidebar from './sidebar';
import { useEffect, useState} from 'react';
import {  useNavigate } from "react-router-dom";

const Home= () => {
  const [watch, setWatch] = useState(0);
  const [timerID, settimerID] = useState(null);
  const Navigate=useNavigate()
  const [users,Setusers]=useState([]);
 const [status,setstatus]=useState("pending")
 const [time,settime]=useState("")

  const gottonext=()=>{
    Navigate("/form")
        }


    const handleLogout = () => {
    
      localStorage.clear();
      Navigate("/");
  };

  const Start = () => {
      setstatus("ongoing")
    if (!timerID) {
      const id = setInterval(() => {
        if (watch == 10) {
          clearInterval(id);
        } else {
          setWatch((watch) => watch + 1);
          settimerID(id);
        }
      }, 100);
    }
    return () => {
      clearInterval(timerID);
    };
  };

  const Pause = () => {

    clearInterval(timerID);
    settimerID(null);
  };

  const Reset = () => {
    clearInterval(timerID);
  setstatus("completed")
    settime(watch)
    setWatch(0);
    
    settimerID(null);
  };


//fetch part
const getUsers =async() => {
    const response =  await fetch('http://localhost:8000/data' ,  {
      method: "GET",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        "authentication": localStorage.getItem("token"),
      },
    });
    Setusers(await response.json());

}
   useEffect(()=> {
   
       getUsers();
      
   },[]);



  return (
<>
<header className="header">
<div className='headside'><Sidebar/></div>

<button className='logout' onClick={handleLogout}>
                   Logout
               </button>
</header>
<div id="secondsection">
<div id="secondsectionfirstpart"> 
<button className='wasnt' onClick={gottonext}>
                   Add New
               </button>

</div>
<div id="displayitem">
<table classname="main" >
            <thead>
            <tr>
            <th>Activity</th>
            <th>status</th>
            <th>Time Taken</th>
            <th>Action</th>
            <th>Action</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
{
     users.map(Elem=>{
        return (  
            <tr>
            <td>{Elem.activity}</td>
            <td>{status}</td>
            <td>{time}</td>
            <td> <button onClick={Start}>Start</button></td>
            <td><button onClick={Pause}>Pause</button></td>
            <td> <button onClick={Reset}>End</button></td>
                   </tr> 
        )

    })
}

</tbody>
        </table>
    </div>

</div>

    

    </>
  );
};

export default Home;