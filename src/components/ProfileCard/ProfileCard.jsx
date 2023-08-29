import React from "react";
import Profile from "../../image/profile3.jpg";
import Cover from "../../image/cover3.jpeg";
import coverdefault from "../../image/coverdefault.jpg"
import profiledefault from "../../image/profiledefault.jpg"
import "./ProfileCard.css";
import { useSelector } from "react-redux";
import {Link}from "react-router-dom";

const  ProfileCard =({location})=>{
    const {user}=useSelector((state)=>state.authReducer.authData)
    const serverPublic =process.env.REACT_APP_PUBLIC_FOLDER
   
    return(
        <div className="ProfileCard">
            <div className="ProfileImages">
                 <img className="imageOne" src={user.coverPicture?serverPublic + user.coverPicture:coverdefault} alt="" />
                 <img className="imageTow" src={user.profilePicture?serverPublic + user.profilePicture:profiledefault} alt=""/>
            </div>
            <div className="ProfileName">
                <span className="spanOne">{user.firstname}{user.lastname}</span>
                <span className="spanTow"> {user.worksAt?user.worksAt:"work at ..."}</span>
            </div>

<div>
           <hr />

</div>
<div className="post">







</div>
{location ==="profilePage" ?(""):((<span className="myProfile">
          <Link style={{textDecoration:"none",color:"inherit"}} to={`/profile/${user._id}`}>My profile</Link>
           </span>))
           

}
       

        </div>
    )
}
export default ProfileCard;