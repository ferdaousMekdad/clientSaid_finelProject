import React, { useState,useEffect } from "react";

import Profileimage from "../../../image/profile3.jpg"
import {UilPen} from "@iconscout/react-unicons";

import "./RecipePost.css";
import axios from "axios";
import RecipeModel from "../RecipeModel";

const RecipePost =({data})=>{
    const[imaage ,setImaage]=useState([]);
    const[file,setFile]=useState()
 
    useEffect(()=>{
      const response=  axios.get("http://localhost:3000/getImage");
        setImaage(response.data)
        
        },[])
    return(
        <div className="creatCard">
            <div className="firstCard">
                <div className="userinffo">
                    <img src={Profileimage} alt="" />
                    <h5>userName</h5>
             </div>
             <div className="toCreate">
                <p>create recipe</p>
                <UilPen  width='2rem' height='1.2rem' className="pin" />
                 
                
          
             </div>

            </div>

            <form method="GET" action="/getImage" encType="multipart/from-data">
            <input type="file"
            name="file"
        onChange={e=>setFile(e.target.files[0])}
        placeholder="pic a pictur"
        />
        <input type="submit" />
        <button >test</button>
       <br />
      <img  className="nn" src={`http://localhost:3000/images/`+imaage} alt="imageherr" />
     <img method="GET" action="/getImage"  encType="multipart/from-data" src={imaage} alt="" />
            </form>
           
        </div>
    )
}
export default RecipePost;