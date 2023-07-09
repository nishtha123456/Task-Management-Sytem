

import React, { useEffect, useState } from 'react'
//import { ReactDOM } from 'react';
import axios from 'axios';
import{title1,description1,status1,due_date1,assigned_user1} from './Users';
import { useNavigate } from 'react-router-dom';


export default function EditTask ()  {

   const[Users,setUsers]=useState([]);
   //setUsers(user1);
  const  Navigate=useNavigate();
  const [title,settitle]=useState(title1);
  
  const [description,setDescription]=useState(description1);
  const [status,setstatus]=useState(status1);
  const [due_date,setdue_date]=useState(due_date1);
  const [assigned_user,setassigned_user]=useState(assigned_user1);
 
 
     //axios.put("http://localhost:5000/user1",user1.title).then(res=>console.log("task one displayed",res.data));
  
const  handletitle=(e)=>{
    settitle(e.target.value)
  }
   const handleDescription=(e)=>{
    setDescription(e.target.value)
  }
 const handlestatus=(e)=>{
    setstatus(e.target.value)
  }
  const handleDue_date=(e)=>{
    setdue_date(e.target.value)
  }
  const handleassigned_user=(e)=>{
    setassigned_user(e.target.value)
  }



const  handleAdd=()=>{
  var data={title:title,description:description,status:status,due_date:due_date,assigned_user:assigned_user};
    axios.put('http://localhost:5000/',data).then(res =>{console.log("users task sent:",res.data);setUsers(res.data) ;});
   
Navigate('./Users');
   // setAuthers({authers: prev=>[...prev,rs.data.authers]}) window.location.reload();

 
  }

  return (
  
<>      
  

 <div className='container fluid mt-5'>
   <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label bg-success"> Enter Title</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={title} onChange={(e)=>{handletitle(e)}} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success"  >Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={description} onChange={(e)=>{handleDescription(e)}} />
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword"  class="col-sm-2 col-form-label bg-success"  >status</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control" value={status} onChange={(e)=>{handlestatus(e)}} />
    </div>
    </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success" >Due_date</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={due_date}  onChange={(e)=>{handleDue_date(e)}}/>
    </div>
  
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success" >Assigned_user</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={assigned_user} onChange={(e)=>{handleassigned_user(e)}}/>
    </div>
    </div>
    </div>


    <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Save</div>
    
   </> 

  )}