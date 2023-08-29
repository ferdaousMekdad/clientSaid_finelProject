
const postReducer=(state={posts:[],loading:false,error:false,uploading:false},
action
)=>{
switch(action.type){
       // belongs to PostShare.jsx
       case "UPLOAD_START":
        return { ...state, posts:[action.data, ...state.posts],error: false, uploading: true };
      case "UPLOAD_SUCCESS":
        return { ...state, posts: [action.data,...state.posts],
           uploading: false, error: false };
      case "UPLOAD_FAIL":
        return { ...state,posts:action.data, uploading: false, error: true };
      // belongs to Posts.js
        default:
        return state;
}
 

};
export default postReducer;