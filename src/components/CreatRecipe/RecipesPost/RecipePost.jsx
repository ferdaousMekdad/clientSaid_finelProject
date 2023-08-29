import React, { useState,useEffect } from "react";

import Profileimage from "../../../image/profile3.jpg"
import {UilPen} from "@iconscout/react-unicons";

import "./RecipePost.css";
import axios from "axios";
import RecipeModel from "../RecipeModel";

const RecipePost =()=>{
    const[imaage ,setImaage]=useState();
    const[file,setFile]=useState()
    const handleUpload=(e)=>{
        const formdata=new FormData()
        formdata.append('file',file)
        axios.post("http://localhost:3000/uplooaad",formdata)
        .then(res=>console.log(res))
        .catch(err=>console.log(err))
    } 
    useEffect(()=>{
        axios.get("http://localhost:3000/getImage")
        .then(res=>setImaage(res.data[1].imaage))
        .catch(err=>console.log(err))
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

            <div>
            <input type="file"
        onChange={e=>setFile(e.target.files[0])}
        placeholder="pic a pictur"
        />
        <button onClick={handleUpload}>test</button>
       <br />
      <img className="nn" src={`http://localhost:3000/images/`+imaage} alt="imageherr" />

            </div>
           
        </div>
    )
}
export default RecipePost;