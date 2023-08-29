import React,{useState,useRef, useEffect} from "react";
import "./PostShare.css";
import profiledefault from "../../image/profiledefault.jpg"
 import ProfileImage from "../../image/profile3.jpg";
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import {  uploadPost } from "../../actions/uploadAction";
import axios from "axios";

const PostShare =()=>{
    const [image,setImage]=useState(null);
   
    const imageRef=useRef();
    const {user}=useSelector((state)=>state.authReducer.authData)
    const dispatch=useDispatch();
    const serverPublic =process.env.REACT_APP_PUBLIC_FOLDER
    const desc=useRef();
   
  

    const loading=useSelector((state)=>state.postReducer.uploading)
    const onImageChange=(event)=>{
        if(event.target.files && event.target.files[0]){
            let img =event.target.files[0];
            setImage(img);
        }; 
    }
   

    const rest =()=>{
      setImage(null);
      desc.current.value=""
    }

    const handleSubmit=(e)=>{
         e.preventDefault();
          
         const newPost={
            userId:user._id,
            username:user.username,
            desc:desc.current.value,
            userImg:image.current.value,

          
         }
         console.log(newPost)
      
        dispatch(uploadPost(newPost)) 
        rest()
    }
   

    return(
       <div className="PostShare">
        <img className="ProffileImg" src={user.profilePicture?serverPublic + user.profilePicture:profiledefault} alt="" />
       <div className="quistion">
        <input
        ref={desc}
        required
         type="text" placeholder="I am hungry,is There an delicious and easy recipe" />
      <div className="postOptions">



        <input type="file"
        ref={image}
        required 
        onChange={onImageChange}
        placeholder="pic a pictur"
        />
     
             <div className="options"
             style={{color:"var(--photo)"}} onClick={()=>imageRef.current.click()}>
                 <UilScenery/>
                 Photo
             </div>
             <div className="options"
              style={{color:"var(--video)"}}>
                 <UilPlayCircle/>
                 Video
             </div>
             <div className="options"
              style={{color:"var(--location)"}}>
                 <UilLocationPoint/>
                 Location
             </div>
             <button className="button ps-button"
              onClick={handleSubmit}>
               {loading?"Uploading....":"Share"}
             </button>

             <div style={{display:"none"}}>
                <input type="file" name="myImage" ref={imageRef} onChange={onImageChange}/>
             </div>
            
      </div>
    {image &&(
        <div className="previwImage">
            <UilTimes onClick={()=>setImage(null)}/>
            <img src={URL.createObjectURL(image)} alt="" />
        </div>

    )
    }

       </div>

       </div>
    )
};
export default PostShare;
