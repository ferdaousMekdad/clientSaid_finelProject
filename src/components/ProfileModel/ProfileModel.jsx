import { Modal, useMantineTheme } from "@mantine/core";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { uploadImage } from "../../actions/uploadAction.js";
import { updatUser } from "../../actions/UserAction.js";

function ProfileModal({ modalOpened, setModalOpened,data }) {
  const theme = useMantineTheme();
  const {password,...other}=data;
  const [formData,setFormData]=useState(other);
  const [profileImage,setProfileImage]=useState(null);
  const [coverImage,setCoverImage]=useState(null);
  const dispatch=useDispatch()
  const param=useParams();
  const {user}=useSelector((state)=>state.authReducer.authData)


 const handleChange=(e)=>{
  setFormData({...formData,[e.target.name] : e.target.value})
 }

 const onchangeImage=(event)=>{
  if(event.target.files && event.target.files[0]){
    let img=event.target.files[0];
    event.target.name === "profileImage"
    ?setProfileImage(img)
    :setCoverImage(img);
  }
 };

 const handleSubmit=(e)=>{
    e.preventDefault();
    let UserData=formData;


 dispatch(updatUser(param.id,UserData));
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
     
     <form className="infoForm">
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
            name="profileImage" 
            onChange={onchangeImage}
           
            />

            Cover Image 
            <input type="text"
             name="coverImage"
           onChange={onchangeImage}
             
              />

        </div>

        <button className="button infoButton"
        onClick={handleSubmit}
        >Update</button>
     </form>



    </Modal>
     
    
  );
}
export default ProfileModal;