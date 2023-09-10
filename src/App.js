import Home from './pages/Home';
import {BrowserRouter as Router,Route, Routes, Link,Navigate} from "react-router-dom";
import './App.css';
import Profile from './pages/Profile/Profile';
import Auth from './pages/Auth/Auth';
import {useSelector} from "react-redux";
import RecipePost from './components/CreatRecipe/RecipesPost/RecipePost';
import RecipeModel from './components/CreatRecipe/RecipeModel';
import CoverPage from ".//pages/coverPage/cover";

function App() {
 const user=useSelector((state)=>state.authReducer.authData)
  return (
    <div className="App">
      <div className='blur' style={{top:'18%',right:'0'}}></div>
      <div className='blur' style={{top:'36%',left:'-8rem'}}></div>

     <Router>
    <Link  to={"coverPage"}>cover</Link>
      <Routes>
        <Route exact path="/" element={user ?<Navigate to="home"/>:<Navigate to ="auth"/>}/>
        <Route exact path="/home" element={user ?<Home/>:<Navigate to="../auth"/>}/>
        <Route exact path="/auth" element={user ?<Navigate to="../home"/>:<Auth/>}/>
        <Route path='/profile/:id' element={user?<Profile/>:<Navigate to="../auth"/>}/>
        <Route exact path ="/coverPage" element={<CoverPage/>}/>
        <Route exact path ='/recipeModel' element={<RecipeModel/>}/>
       
      </Routes>
     </Router>
  


   
   
    </div>
  );
}

export default App;
 