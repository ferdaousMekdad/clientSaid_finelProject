import axios from "axios";

const API =axios.create({baseURL:"http://localhost:3000"});
export const getTimeLinePosts=(id)=>API.get(`/post/${id}`);
export const likePost =(id,user)=>API.put(`/post/${id}/like`,{user:user})