import React from "react";
import "./Profile.css"
import ProfileLeft from "../../components/ProfileLeft/ProfileLeft";
import PostSide from "../../components/PostSide/PostSide";
import ProfileCard from "../../components/ProfileCard/ProfileCard";
import RightSide from "../../components/RightSide/RightSide";
import { useSelector } from "react-redux";


const Profile=()=>{
    const {user}=useSelector((state)=>state.authReducer.authData);
    const posts=useSelector((state)=>state.postReducer.posts)
    return(
        <div className="Profile">
            <ProfileLeft/>

            <div className="Profile-center">
             <div>
             <ProfileCard  location="profilePage"/>
             
             </div>
             {posts.filter((post)=>post.userId===user._id)?
              <PostSide/>:"no posts"}
             
            </div>
               <RightSide/> 
            
             
        </div>
    )
};
export default Profile;