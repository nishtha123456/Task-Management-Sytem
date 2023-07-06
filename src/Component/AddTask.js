

import React, { useEffect, useState } from 'react'
//import { ReactDOM } from 'react';
import Axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function AddTask ()  {

   const[Users,setUsers]=useState([]);
  const  Navigate=useNavigate();
  const [title,settitle]=useState('');
  const [description,setDescription]=useState('');
  const [status,setstatus]=useState('');
  const [due_date,setdue_date]=useState('');
  const [assigned_user,setassigned_user]=useState('');
 
 
     
  
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
    const Data={title:title ,description:description, status:status,due_date:due_date,assigned_user:assigned_user }
    Axios({
      method: "POST",
      
      url: "http://localhost:5000/", 
      data:Data,
      headers: {
        "Content-Type": "application/json"
      }
    }).then(res =>{console.log("users task sent:",res.data.Users);setUsers(res.data.users) ;});
   
Navigate('./Users');
   // setAuthers({authers: prev=>[...prev,res.data.authers]}) window.location.reload();

 
  }

  return (
  
<>      
  

<div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label">Title</label>
    <div class="col-sm-10">
      <input type="text"  class="form-control"  onChange={(e)=>{handletitle(e)}} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label"  >Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" onChange={(e)=>{handleDescription(e)}} />
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label"  >status</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" onChange={(e)=>{handlestatus(e)}} />
    </div>
    </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Due_date</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  onChange={(e)=>{handleDue_date(e)}}/>
    </div>
  
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label" >Assigned_user</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  onChange={(e)=>{handleassigned_user(e)}}/>
    </div>
    </div>
    

    <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Save</div>
   </> 
  )
}