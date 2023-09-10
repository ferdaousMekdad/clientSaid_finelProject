import React, { useEffect, useState } from "react";
import "./InfoCard.css";
import {UilPen} from "@iconscout/react-unicons";
import ProfileModal from "../ProfileModel/ProfileModel";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import * as UserApi from "../../api/UserRequest.js"
import {logOut}from "../../actions/AuthAction.js"
import axios from "axios";
import n from "../../image/cover.jpeg"
import {useCookies} from "react-cookie";
export const Logout =()=>{
    const dispatch=useDispatch();
    const handleLogOut=()=>{
        dispatch(logOut())
    }
    return(
        <div>
              <button className="button logout-button" onClick={handleLogOut}>LogOut</button>
        </div>
    )
};


const InfoCard=({data})=>{
    const dispatch=useDispatch();
    const [modalOpened,setModalOpened]=useState(false);
    const params =useParams();

    const profileUserId=params.id 
    const [profileUser,setProfileUser]=useState([])

    const[cookies,_]=useCookies(["access_token"]);
    const [formData,setFormData]=useState([]);
    const {user}=useSelector((state)=>state.authReducer.authData) 
   
   useEffect(()=>{
       {
           /**
            const fetchProfileUser=async()=>{
                if(profileUserId===user._id){
                    setProfileUser(user)
                    console.log(user)
                }
                else{
             * 
            const profileUser=await UserApi.GetUser(profileUserId)
            setProfileUser(profileUser)
             * 
        }
        
       
      }
      */
        }

        const fetchProfileUser=async()=>{
           
           
            const id=user._id;
            try {
             const response= await axios.get( `http://localhost:3000/user/${id}`);
              setFormData(response.data)
             
            
              console.log(response)
            } catch (error) {
              console.log(error)
            }
  }
        
    fetchProfileUser();
    //if user change s the useEfuct render
   },[user])
   
   
   
    return(
        <div className="InfoCard" >
            <div className="infoHead">
                <h4>Profile Info</h4>
                {user._id === profileUserId?(
                <div>
                <UilPen  width='2rem' height='1.2rem' onClick={()=>setModalOpened(true)}/>
                </div>

                ):""}
                
            
             <ProfileModal
             modalOpened={modalOpened}
            setModalOpened={setModalOpened}
            data={user}
            />
            
            </div>
           
         

            <div >
      
          <ul className="cart">
         
          <li key={formData._id}>

            <div className="info">
                <span>
                    <b>Age  </b>

                </span>
                <span>{formData.Age} old</span>
            </div>

            <div className="info">
                <span>
                    <b>Lives </b>

                </span>
                <span> {formData.livesin}</span>
            </div>
            <div className="info">
                <span>
                    <b>Works at </b>

                </span>
                <span>{formData.worksAt}</span>
            </div>
            <div className="info">
                <span>
                    <b> country</b>

                </span>
                <span>{formData.country}</span>
            </div>
            <div className="info">
                <span>
                    <b>firstname </b>

                </span>
                <span>{formData.firstname}</span>
            </div>
      
     



          </li>


              
           
          </ul>
        </div>



           


             
            
           
        </div>
    )
};
export default InfoCard;