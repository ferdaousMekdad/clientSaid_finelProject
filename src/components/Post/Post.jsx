import React,{useState,useEffect} from "react";
import "./Post.css";
import NotLike from "../../image/heart.png";
import Comment from "../../image/comment.png";
import Shear from "../../image/send.png";
import Like from "../../image/like.png"
import axios from "axios";
import {likePost} from "../../api/PostsRequests.js";
import {useSelector} from "react-redux";


const Post=({data})=>{
   
    const {user}=useSelector((state)=>state.authReducer.authData)
    const [recipes,setRecipes]=useState([]);
    const [liked,setLiked]=useState(data.Likes.includes(user._id))
    const [likes,setLikes]=useState(data.Likes.length)
    const handleLike=()=>{
        likePost(data._id,user._id)
        setLiked((prev)=>!prev)
        liked?setLikes((prev)=>prev -1):setLikes((prev)=>prev +1)
    }
    
     



 
  

    useEffect(()=>{
        const fetchRecipes =async()=>{
            try {
                const response=await axios.get("http://localhost:3000/post");
                setRecipes(response.data);
            } catch (error) {
                console.log("hir is the errr")
            }
        };
        
        
        
        
        
        fetchRecipes();
    
        
    },[])
    



  
    
    return(
        <div className="Post">
           
           <div className="user">
            <img className="userimg" src="" alt="" />
            <span className="name"><b>usernameples {user.username}</b> </span>
             
            </div>
            <img src={data.image} alt="" />
             
           <div className="deatil">
           <span>{data.desc}</span>
           <span>{data.name}</span>
           </div>
   


            {recipes.map((recipes)=>(
               <div key={recipes._id} className="all">
        <div className="detail">

            <div className="rcipeDetail" >
            <div className="user">
            <img className="userimg" src={recipes.userimage} alt="" />
            <span className="name"><b>{recipes.username}</b> </span>
            </div>
  
 <span><b>Recipe Name:</b>{recipes.name}</span>
 <span><b>Ingredient:</b> {recipes.ingridient}</span>
 <span> <b> Descriptens:</b>{recipes.description}</span>
 <span><b>cookingTime:</b> {recipes.cookingTime}</span>

 <img className="foodImage" src={recipes.imageUrl} alt="" />

 
            </div>
        </div>
 
        
        <div className="postReact">
            <img src={liked?Like:NotLike} alt=""
            onClick={handleLike} />
            <img src={Comment} alt="" />
            <img src={Shear} alt="" />
        </div>

        <span style={{color:"var(--gray)",fontSize:'12px'}}>{likes} likes</span>
        
 
            </div>
                 
                 
                 
                 
                 ))}
                 
                 </div>    
)
            };
export default Post;
