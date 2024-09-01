import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import Services from './Components/Services';
import Profile from './Components/Profile';
import About from './Components/About';
import Contact from './Components/Contact';
import Login from './Components/Login';
import Wedding from './Components/Weddng';
import Engagement from './Components/Engagement';
import Birthday from './Components/Birthday';
import Bachelor from './Components/Bachelor';
import College from './Components/College';
import Cart from './Components/Cart';
import Admin from './Components/Admin';
import AdminHome from './Components/AdminHome';
function App() {
  return (
    <div>
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/Login' element={<Login/>}/>
      <Route path='/Service' element={<Services/>}/>
      <Route path='/Profile' element={<Profile/>}/>
      <Route path='/Admin' element={<Admin/>}/>
      <Route path='/AdminHome' element={<AdminHome/>}/>
      <Route path='/About' element={<About/>}/>
      <Route path='/Cart' element={<Cart/>}/>
      <Route path='/Contact' element={<Contact/>}/> 
      <Route path='/Wedding' element={<Wedding/>}/>
      <Route path='/Engagement' element={<Engagement/>}/>
      <Route path='/Birthday' element={<Birthday/>}></Route>
      <Route path='/Bachelor' element={<Bachelor/>}></Route>
      <Route path='/College' element={<College/>}></Route>/
    </Routes>
      
    </div>
    
  );
}

export default App;
