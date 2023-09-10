import React,{useState,useEffect} from "react";
import "./Post.css";
import NotLike from "../../image/heart.png";
import Comment from "../../image/comment.png";
import Shear from "../../image/send.png";
import Like from "../../image/like.png"
import profiledefault from "../../image/profiledefault.jpg"
import axios from "axios";
import {likePost} from "../../api/PostsRequests.js";
import {useSelector} from "react-redux";


const Post=({data,recipe})=>{
    const [formData,setFormData]=useState([]);
    const {user}=useSelector((state)=>state.authReducer.authData)
    const [recipes,setRecipes]=useState([]);
    
    {/**
    
    
    const [liked,setLiked]=useState(data.Likes.includes(user._id))
    const [likes,setLikes]=useState(data.Likes.length)
  
  const handleLike=()=>{
      likePost(data._id,user._id)
      setLiked((prev)=>!prev)
      liked?setLikes((prev)=>prev -1):setLikes((prev)=>prev +1)
  }
*/}
    
     



 
  

    useEffect(()=>{
        const fetchRecipes =async()=>{
            const id=user._id;
            try {
              await axios.get("http://localhost:3000/post")
              .then(recipes=>setRecipes(recipes.data))
              .catch(err=>console.log(err,"hii"))
     
             
            } catch (error) {
                console.log(error)
            }
        };
        
        
        //for having the user profilePicture and information
        
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
        
        fetchRecipes();
        fetchProfileUser();
    
        
    },[])
    



  
    
    return(
        <div className="Post">
           {Object.values(recipes).map((recipe)=>(
               <div  className="all">

            <div className="rcipeDetail" >
            <div className="user">

            <img className="userimg" src={formData. profilePicture?formData. profilePicture:profiledefault} alt="" />
            <span className="name"><b>{formData.username}</b> </span>
           
           </div>
            <div className="detail">

 

      <span><h4>Recipe Name:{recipe.username}</h4></span>
      <span><h4>Recipe Name:{recipe.name}</h4></span>
      <span><h4>Ingredient: {recipe.ingredients}</h4></span>
      <span> <h4> Descriptens:{recipe.description}</h4></span>
      <span><h4>cookingTime: {recipe.cookingTime}</h4></span>
     
      <img className="foodImage" src={recipe.imageUrl} alt="" />
     


      
      
  
            </div>
        </div>
 
        
        <div className="postReact">
            <img src={Like} alt=""
            />
            <img src={Comment} alt="" />
            <img src={Shear} alt="" />
        </div>

        <span style={{color:"var(--gray)",fontSize:'12px'}}> likes</span>
        
 
            </div>
        
                 
           ))}
  
                 
                 
                 
               
                 
                 </div>    
)
            };
export default Post;
