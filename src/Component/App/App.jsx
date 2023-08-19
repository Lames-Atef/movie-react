import Home from '../Home/Home.jsx';
import MasterLayout from '../MasterLayout/MasterLayout.jsx';
import './App.css';
import {RouterProvider,createBrowserRouter} from 'react-router-dom'
import About from '../About/About.jsx';
import Movies from '../Movie/Movies.jsx';
import Register from '../Register/Register.jsx';
import Login from '../Login/Login.jsx';
import Detailes from '../Detailes/Detailes.jsx';
import TvShowes from '../TvShowes/TvShowes.jsx';
function App() {
 const routes=createBrowserRouter([
  {path:"",element:<MasterLayout/>,children:[
    {path:'home',element:<Home/>},
    {path:'about',element:<About/>},
    {path:'movie',element:<Movies/>},
    {path:'register',element:<Register/>},
    {path:'details',element:<Detailes/>},
    {path:'login',element:<Login/>},
    {path:'tvshowes',element:<TvShowes/>},

  ]}
 ])
return(
  <>
  <RouterProvider router={routes}/>
  </>

)
}
export default App;
