import React from "react";
import "./FollowersCard.css";
import {Followers} from "../Data/FollowersData.jsx";

const FollowersCard =()=>{
    return(
      <div className="FollowersCard">
        <h3>Sugestion of Friend</h3>

        {Followers.map((followers,id)=>{
            return(
                <div className="follower">
                    <div>
                        <img className="followerIamge" src={followers.img} alt="" />
                        <div className="name">
                            <span className="spanName">{followers.name}</span>
                            <span className="spanUserName">@{followers.username}</span>
                        </div>

                    </div>
                    <button className="button fc-button">Follow</button>
                </div>
            )
        })}
      </div>
    ) 
};
export default FollowersCard;