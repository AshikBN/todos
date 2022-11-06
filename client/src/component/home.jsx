import '../css/home.css';
import Sidebar from './sidebar';
import { useEffect, useState} from 'react';
import {  useNavigate } from "react-router-dom";


const Home= () => {
  const [watch, setWatch] = useState(0);
  const [timerID, settimerID] = useState(null);
  const navigate=useNavigate()
  const [users,Setusers]=useState([]);
 const [status,setstatus]=useState("pending")
 const [time,settime]=useState("")

 

    const handleLogout = () => {
    
      localStorage.clear();
      navigate("/");
  };

  const Start = () => {
      setstatus("ongoing")
    if (!timerID) {
      const id = setInterval(() => {
        if (watch === 10) {
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
    const response =  await fetch('/data' ,  {
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
{/* <div className='headside'><Sidebar/></div> */}

<button style={{float: "right",
    height: "50px",
    width: "100px",
    backgroundColor: "red",
    borderRadius: "15px"}} className='logout' onClick={handleLogout}>
                   Logout
               </button>
</header>
<div id="secondsection">
<div id="secondsectionfirstpart"> 


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
    <button className='add-new' onClick={()=>{navigate("/form")}} >Add new</button>

</div>

    

    </>
  );
};

export default Home;