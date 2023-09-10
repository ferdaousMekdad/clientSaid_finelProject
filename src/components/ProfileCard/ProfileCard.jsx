import React, { useEffect, useState } from "react";
import Profile from "../../image/profile3.jpg";
import Cover from "../../image/cover3.jpeg";
import coverdefault from "../../image/coverdefault.jpg"
import profiledefault from "../../image/profiledefault.jpg"
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import {Link}from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";
const  ProfileCard =({location,data})=>{
    
  const[cookies,_]=useCookies(["access_token"]);
    const [formData,setFormData]=useState([]);
    
  
    const {user}=useSelector((state)=>state.authReducer.authData)
    const serverPublic =process.env.REACT_APP_PUBLIC_FOLDER
  

    useEffect(()=>{
     

       const fetchProfileUser=async()=>{
          
          
           const id=user._id;
           try {
            const response= await axios.get( `http://localhost:3000/user/${id}`,
           
            )
            setFormData(response.data)
            
            
             console.log(response)
           } catch (error) {
             console.log(error)
           }
 }
       
   fetchProfileUser();
   //if user change s the useEfuct render
  },[])




    return(
        <div className="ProfileCard">
            <div className="ProfileImages">
                 <img className="imageOne" src={formData.coverPicture?formData.coverPicture:coverdefault} alt="" />
                 <img className="imageTow" src={formData. profilePicture?formData. profilePicture:profiledefault} alt=""/>
            </div>
          
               <div className="ProfileName">
                <span className="spanOne">{user.username}</span>
               <span>worksAt: {formData.worksAt}</span>
             </div>
              
             
              
            

<div>
          

</div>

{location ==="profilePage" ?(""):((<span className="myProfile">
          <Link style={{textDecoration:"none",color:"inherit"}} to={`/profile/${user._id}`}> <hr /> My profile</Link>
           </span>))
           

}
       

        </div>
    )
}
export default ProfileCard;