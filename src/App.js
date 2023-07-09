
import './App.css';
import {BrowserRouter,Routes,Route} from  'react-router-dom'

import 'jquery/dist/jquery.min.js'; // Have to install and import jQuery because of bootstrap modal's dependency
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import Navbar from './Component/Navbar';
import Banner from './Component/Banner';
import Login from './Component/Login';
import Users from './Component/Users';
import Admin from './Component/Admin';
import AdminDashboard from './Component/AdminDashboard';
import AddTask from './Component/AddTask'
import EditTask from './Component/EditTask';
function App() {
  return (
    <BrowserRouter>
       
    <Navbar/>
      

    <Routes>
     <Route exact path='/' element={<Login/>}/>
     <Route exact path='/Login' element={<Login />}/>
     <Route exact path='/Admin' element={<Admin />}/>
     <Route exact path='/Users' element={<Users/>}/>
     <Route exact path='/Login/Users' element={<Users/>}/>
     
     <Route exact path='/Login/Users/AddTask' element={<AddTask/>}/>
     <Route exact path='/Login/Users/EditTask/Users/AddTask' element={<AddTask/>}/>
     
     <Route exact path='/Login/Users/AddTask/EditTask/Users/AddTask' element={<AddTask/>}/>
     <Route exact path='/Login/Users/EditTask' element={<EditTask/>}/>
     <Route exact path='/Users/EditTask' element={<EditTask/>}/>
     <Route exact path='Admin/AdminDashboard' element={<AdminDashboard/>}/>
     <Route exact path='/Login/Users/AddTask/Users' element={<Users/>}/>
     <Route exact path='/Login/Users/EditTask/Users/AddTask/Users' element={<Users/>}/>
     <Route exact path='/Users/AddTask/Users' element={<Users/>}/>
     <Route exact path='/Login/Users/EditTask/Users' element={<Users/>}/>
     <Route exact path='/Login/Users/AddTask/Users/EditTask/Users' element={<Users/>}/>
     <Route exact path='/Login/Users/AddTask/Users/EditTask' element={<EditTask/>}/>
     
      </Routes>
    
  
</BrowserRouter>
      );
}

export default App;
