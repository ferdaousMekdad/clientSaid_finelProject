import React,{useState} from "react";
import PostPic1 from "../../image/food1.jpg";
import PostPic2 from "../../image/food2.jpg";
import PostPic3 from "../../image/food3.jpg";
import PostPic4 from "../../image/food4.jpg";
import PostPic5 from "../../image/food5.jpg";
import UserImg1 from "../../image/profile6.jpg";
import UserImg2 from "../../image/profil2.jpg";
import UserImg3 from "../../image/profile3.jpg";
import UserImg4 from "../../image/profile4.jpg";
import UserImg5 from "../../image/profile5.jpg";



export const PostsData=[
 
    
    {
        userImg:UserImg1,
        img:PostPic1,
        name:"Nana",
      
    },
    
    {   
        userImg:UserImg5,
        img:PostPic5,
        name:"Koki",
        recipeName:"plat de ...",
        ingridient:"one tow  ",
        desc:"A+B+C+D+D+D+D",
        cookingTime:"202",
        likes:500,
        liked:true,
    },
] 