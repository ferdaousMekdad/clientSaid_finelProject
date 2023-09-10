import React, { useEffect } from "react";
import "./Posts.css";
import {PostsData }from "../Data/PostsData";
import Post from "../Post/Post";
import { useDispatch, useSelector } from "react-redux";
import { getTimeLinePosts ,likePost } from "../../actions/PostAction.js";

const Posts =()=>{
    const dispatch=useDispatch()
    const {user}=useSelector((state)=>state.authReducer.authData)
    const {posts,loading}=useSelector((state)=>state.postReducer)
     
    useEffect(()=>{
        dispatch(getTimeLinePosts(user._id));
      
    },[])
    
    return(
        <div className="Posts">
        
          <Post/>
        </div>
    )
}
export default Posts;