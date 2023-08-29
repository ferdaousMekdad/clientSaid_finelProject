import React,{useState} from "react";
import "./RightSide.css";
import home from "../../image/home.png"
import {UilSetting} from "@iconscout/react-unicons";
import Noti from "../../image/notification.png"
import comment from "../../image/comment.png"
import { Logout } from "../InfoCard/InfoCard";
import ShareModel from "../ShareModel/ShareModel";
import { Link } from "react-router-dom";


 export const SHare=()=>{
    const [modalOpened,setModalOpened]=useState(false);
    return(
        <div>
              <button className="button r-button" onClick={()=>setModalOpened(true)}>
            share
         </button>
                <ShareModel 
                modalOpened={modalOpened}
                setModalOpened={setModalOpened}/>
        </div>
    )
}

const RightSide=()=>{

    return(
        <div className="RightSide">
         <div className="navIcons">
          <Link to="../home">
            <img src={home} alt="" />
          
          </Link>
            <UilSetting/>
            <img src={Noti} alt="" />
            <img src={comment} alt="" />
         </div>
        
         <div className="LogOutt">
       
       <Logout/>

         </div>
       <SHare/>
        </div>
    )
};
export default RightSide;
