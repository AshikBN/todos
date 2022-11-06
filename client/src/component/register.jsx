import '../css/login.css';
import { useState } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from "axios";
const Register=()=>{
    const navigate=useNavigate();
    const [user, setUser]=useState({});
    const register=(e)=>{
        e.preventDefault()
        const {email,password,cpassword}=user;
        console.log(user)
        if(email && password && password===cpassword){
           // alert("posted")
            axios.post("/register",user)
            .then(res=>{
                navigate("/")
               
            })
        }
        else{
            alert("invalid input")
        }
    }
    return(
        <>
        <div className="login-main" >
            <div className="login-box">
               
               
                <form className='login-form'>
                    <input className='login-input2' onChange={(e)=>setUser({...user,email:e.target.value})}  placeholder="Mail ID" name="email" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,password:e.target.value})} type="password" placeholder="Password" name="password" required/>
                    <input className='login-input' onChange={(e)=>setUser({...user,cpassword:e.target.value})} type="password" placeholder="Confirm Password" name="cpassword" required/>
                    <button className='loginBtn' type="submit" onClick={register}>Sign up</button>
                </form>
            </div>
            <div className='addition'>
            <a href='/'>Sign in</a>
            </div>
        </div>
        </>
    );
}
export default Register;