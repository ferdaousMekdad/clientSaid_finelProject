import React, { useState } from "react";
import "./Auth.css";

import Cooklogo from "../../image/foodLogo2.png";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { LogIn, signUp } from "../../actions/AuthAction";


const Auth =()=>{
  const [isSignUp,setIsSignUp]=useState(true);
  const loading =useSelector((state)=>state.authReducer.loading);
  const navigate =useNavigate();
  const dispatch =useDispatch();
  console.log(loading);
const initialstat={
  firstname:"",
  lastname:"",
  password:"",
  confirmpass:"",
  username:""
}

  const[data,setData]=useState({
    firstname:"",
    lastname:"",
    password:"",
    confirmpass:"",
    username:""
  });

  const [confirmPass,setConfirmPass]=useState(true);
  const navigatee=useNavigate();
  
  {/* 


  const handleSubmit= async(e)=>{
   
    e.preventDefault();
    try {
      if(isSignUp){
        const result=await axios.post("http://localhost:3000/auth/register",{
          username,firstname,lastname,password,
        });
        
        {setIsSignUp((prev)=>!prev);resetForm()} 
        console.log(result)
     

    }else{

      await axios.post("http://localhost:3000/auth/login",{
        username,password,
      });
      
      alert("login it don");
      navigatee("/home")
      console.log("login")
    }
  } catch (error) {
    console.log(error)
    alert("this user it not exsist try to sign in first ")
    
  }
  
  
}

*/}

const handleChange=(e)=>{
  setData({...data,[e.target.name]:e.target.value});
};


const handleSubmit =(e)=>{
  e.preventDefault();
  if(isSignUp){
   data.password=== data.confirmpass
    ?dispatch(signUp(data))
    :setConfirmPass(false);
  }else{
  dispatch(LogIn(data));

  }
};

const resetForm =()=>{
  setConfirmPass(true);
    setData({initialstat})
  }


    return(
        <div className="Auth">
          {/**    left said of logo */}
            <div className="a-Top rotate-scale-up">
              <div>
              <img className="cookLogo" src={Cooklogo} alt="" />
              </div>
              <div className="webName">
                <h1>let's Cook </h1>
               
              </div>
            </div>

                   {/**rght said of signin */}
            <div className="signup">
      <form className="infoForm authForm" onSubmit={handleSubmit}>
        <h3>{isSignUp ?"sign up":"log in"}</h3>

        {isSignUp &&    <div>
          <input type="text" 
          placeholder="First Name" 
          className="infoInput"
          name ='firstname'
          value={data.firstname}
          onChange={handleChange}
          />

          <input type="text" 
          placeholder="Last Name" 
          className="infoInput"
          name ='lastname'
          value={data.lastname}
          onChange={handleChange}
          />
        </div> }
     

    <div>
      <input type="text"  
      placeholder="Username"
      className="infoInput"
      name="username"
      value={data.username}
      onChange={handleChange}
      />
    </div>

    <div>
      <input type="password"
      className="infoInput"
      name="password"
      value={data.password}
      placeholder="Password"
      onChange={handleChange}
       />


      {isSignUp &&<input type="password"
      className="infoInput"
      name="confirmpass"
      value={data.confirmpass}
      placeholder="Conferm Password"
      onChange={handleChange}
       /> }
    
    </div>
  
<span style={{display:confirmPass? "none":"block"
,color:'red',fontSize:'12px',
alignSelf:"flex-end",margin:"5px"}}>
  The password it not the same 
</span>
    <div>
      <span style={{fontSize:"12px"}} 
      onClick={()=>{setIsSignUp((prev)=>!prev);resetForm()}}>
        {isSignUp?"Already have an account .Login!":"Dont have an account ? Sign Up "}</span>
    </div>


    <button className="button infoButton" type="submit"> {loading ?"loading...":isSignUp?"signUp":"Log in "}</button>
    

      </form>
    
    </div>

        </div>
    )
};


export default Auth;