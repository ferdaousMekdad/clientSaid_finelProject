
import React ,{useState} from "react";

import "./RecipeModel.css";
import axios from "axios";
import { Modal, useMantineTheme } from "@mantine/core";
import {UseGetUserID} from "../../hooks/UseGetUserID";
import {useCookies} from "react-cookie";
import {useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";


const RecipeModel=({modalOpened, setModalOpened,data})=>{
    const theme = useMantineTheme();
    const userID=UseGetUserID();
  const user=useSelector((state)=>state.authReducer.authData)
   const navigate=useNavigate();
    const[cookies,_]=useCookies(["access_token"]);
     
    const [recipe,setRecipe]=useState({
      
        name:"",
        description:"",
        ingredients:[],
        imageUrl:"",
        cookingTime:0,
        userOwner:userID,
       
    });

    const handleChange=(e)=>{
        const {name,value}=e.target;
        setRecipe({...recipe,[name]:value});
        console.log("yes")
    };

const handelSubmit=async(e)=>{
     e.preventDefault();
     try {
        await axios.post("http://localhost:3000/post/createRecipe",
        {...recipe},
        {
            headers:{authorization:cookies.access_token},

        });
        console.log("it don and work");
        {/**  navigate("/home")              */}
      
     } catch (error) {
        console.log("theris err")
     }
     setModalOpened(false)
}
    return(
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
       
       <div className="infoForm" onSubmit={handelSubmit}>
          <h3>Create Recipe</h3>
         <form >

          <div>
              <input 
              type="text"
              id="name"
              className="inforecipe"
              name="name"
              value={recipe.name}
              placeholder="Recipe Name" 
              onChange={handleChange}/>
             

         
              <input 
              type="text"
              className="inforecipe"
              id="description"
              value={recipe.description}
              name="description"
              placeholder="discription" 
              onChange={handleChange}/>
          </div>
  
          <div>
              <input
               type="text"
               className="inforecipe"
               name="ingredients"
               value={recipe.ingredients}
               placeholder="ingredients"
               onChange={handleChange} />
          </div>
          <div>
              <input
               type="text"
               className="inforecipe"
               name="imageUrl"
               value={recipe.imageUrl}
               placeholder="Recipe Image"
               onChange={handleChange} />
  
              <input
               type="text"
               className="inforecipe"
               name="cookingTime"
               value={recipe.cookingTime}
               placeholder="cookingTime"
               onChange={handleChange} />
          </div>
  
         
  
 </form>

          
          <button className="button infoButton" onClick={handelSubmit} >Create</button>
  
  
       </div>
  
      </Modal>
    )
};
export default RecipeModel;