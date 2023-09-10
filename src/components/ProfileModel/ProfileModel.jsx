import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import {useCookies} from "react-cookie";
import { uploadImage } from "../../actions/uploadAction.js";
import { updatUser } from "../../actions/UserAction.js";

function ProfileModal({ modalOpened, setModalOpened,data }) {
  const theme = useMantineTheme();
  const {password,...other}=data;
  const [dataa,setDataa]=useState([]);
  const[cookies,_]=useCookies(["access_token"]);
  const [formData,setFormData]=useState({
    username:"",
    firstname:"",
    lastname:"",
    Age:"",
    coverPicture:"",
    profilePicture:"",
    country:"",
    worksAt:"",
    livesin:"",
  });

  {/**

  const [profileImage,setProfileImage]=useState(null);
  const [coverImage,setCoverImage]=useState(null);

*/}
  const dispatch=useDispatch()
  const param=useParams();
  const {user}=useSelector((state)=>state.authReducer.authData)


 const handleChange=(e)=>{
  setFormData({...formData,[e.target.name] : e.target.value})
 }

 {/**

 const onchangeImage=(event)=>{
  if(event.target.files && event.target.files[0]){
    let img=event.target.files[0];
    event.target.name === "profileImage"
    ?setProfileImage(img)
    :setCoverImage(img);
  }
 };

*/}

 const handleSubmit=async(e)=>{
    e.preventDefault();
    const id=user._id;
    try {
     const response= await axios.put( `http://localhost:3000/user/${id}`,
      {...formData},
      {
        headers:{authorization:cookies.access_token},

      });
      console.log(response)
    } catch (error) {
      console.log(error)
    }

setModalOpened(false)


}

  return (
    <Modal
      overlayColor={
        theme.colorScheme === "dark"
          ? theme.colors.dark[9]
          : theme.colors.gray[2]
      }
      overlayOpacity={0.55}
      overlayBlur={3}
      size="55%" 
      opened={modalOpened}
      onClose={() => setModalOpened(false)}
    >
     
     <form className="infoForm" onSubmit={handleSubmit} >
        <h3>Your info</h3>

        <div>
            <input 
            type="text"
            className="infoInput"
            name="firstname"
            onChange={handleChange}
            value={formData.firstname}
            placeholder="First Name" />

            <input 
            type="text"
            className="infoInput"
            name="lastname"
            onChange={handleChange}
            value={formData.lastname}
            placeholder="Last Name" />
        </div>

        <div>
            <input
             type="text"
             className="infoInput"
             name="worksAt"
             onChange={handleChange}
             value={formData.worksAt}
             placeholder="works at" />
        </div>
        <div>
            <input
             type="text"
             className="infoInput"
             name="livesin"
             onChange={handleChange}
             value={formData.livesin}
             placeholder="Lives in" />

            <input
             type="text"
             className="infoInput"
             name="country"
             onChange={handleChange}
             value={formData.country}
             placeholder="Country" />
        </div>

        <div>
            <input 
            type="text"
            className="infoInput"
            name="Age"
            onChange={handleChange}
            value={formData.Age}
             placeholder="Age" 
             />

        </div>

        <div>
            Profile Image
            <input type="text" 
            name="profilePicture" 
           onChange={handleChange}
           value={formData.profilePicture}
           
            />

            Cover Image 
            <input type="text"
             name="coverPicture"
         onChange={handleChange}
         value={formData.coverPicture}
             
              />

        </div>

        <button className="button infoButton"
       type="submit"
        >Update</button>
     </form>



    </Modal>
     
    
  );
}
export default ProfileModal;