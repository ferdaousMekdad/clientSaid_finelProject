import React,{useState,useRef, useEffect} from "react";
import "./PostShare.css";
import profiledefault from "../../image/profiledefault.jpg"
 import ProfileImage from "../../image/profile3.jpg";
 
import {UilPen} from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModel/ProfileModel";
import {UilScenery} from "@iconscout/react-unicons";
import {UilPlayCircle} from "@iconscout/react-unicons";
import {UilLocationPoint} from "@iconscout/react-unicons";
import {UilTimes} from "@iconscout/react-unicons";
import { useDispatch, useSelector } from "react-redux";
import {  uploadPost } from "../../actions/uploadAction";
import axios from "axios";
import RecipeModel from "../CreatRecipe/RecipeModel";
import { useParams } from "react-router-dom";




const PostShare =({data})=>{
    const [image,setImage]=useState(null);
    const [modalOpened,setModalOpened]=useState(false);
    const imageRef=useRef();
    const {user}=useSelector((state)=>state.authReducer.authData)
    const dispatch=useDispatch();
    const serverPublic =process.env.REACT_APP_PUBLIC_FOLDER
    const desc=useRef();
    const [formData,setFormData]=useState([]);
    const params =useParams();
    const profileUserId=params.id 

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

 //for handling the profile image of user

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
       <div className="PostShare">
        <img className="ProffileImg" src={formData. profilePicture?formData. profilePicture:profiledefault} alt="" />
       <div className="quistion">
       <p>shar weth pepole somme dilishis food</p>
               

               {user._id ?(
                <div className="painderection">
                <UilPen   className="pain" onClick={()=>setModalOpened(true)}/>
                </div>

                ):""}


                {/**
                 * 
                */}
                 
                 <RecipeModel
                 modalOpened={modalOpened}
                setModalOpened={setModalOpened}
                data={user}
                />

            
{/**
  
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


*/}
</div>

       </div>
    )
};
export default PostShare;
