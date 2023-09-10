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


       
           {/**
             
         //if i want to just have the user owne posts

             {loading?"fetching post...":
                        posts.map((post,id)=>{
                            return   <Post data={post} id={id}/>
                        })}
            
            */}
             
            </div>
               <RightSide/> 
            
             
        </div>
    )
};
export default Profile;