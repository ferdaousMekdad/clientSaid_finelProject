import React from "react";
import "./LogoSearch.css";
import Logo from "../../image/logofood.png"
import {UilSearch} from "@iconscout/react-unicons";
const LogoSearch=()=>{
    return(
        <div className="LogoSearch">
          <img className="logo" src={Logo} alt="" /> 
          <div className="Search">
            <input type="text" placeholder="#Explore"/>
            <div className="s-icon ">
                <UilSearch/>
                
            </div>
          </div>
        </div>
    )
}
export default LogoSearch;