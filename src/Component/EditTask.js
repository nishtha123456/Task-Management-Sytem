

import React, { useEffect, useState } from 'react'
//import { ReactDOM } from 'react';
import axios from 'axios';
import { id } from './Users';
import { useNavigate } from 'react-router-dom';
import { Description } from '@mui/icons-material';

export default function EditTask ()  {

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
  var data=[];
    axios.patch('http://localhost:5000/', { data: { id:id,title:title,description:Description,status:status,due_date:due_date,assigned_user:assigned_user} }).then(res =>{console.log("users task sent:",res.data);setUsers(res.data) ;});
   
Navigate('./Users');
   // setAuthers({authers: prev=>[...prev,res.data.authers]}) window.location.reload();

 
  }

  return (
  
<>      
  
{Users.map((User)=>
<div className='container fluid mt-5'>

  <div class="mb-3 row">
    <label for="staticEmail" class="col-sm-2 col-form-label bg-success"> Enter Title</label>
    <div class="col-sm-10">
      <input type="text" value={User.title} class="form-control"  onChange={(e)=>{handletitle(e)}} />
    </div>
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success"  >Description</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={User.description} onChange={(e)=>{handleDescription(e)}} />
    </div>
    </div>
    <div class="mb-3 row">
    <label for="inputPassword"  class="col-sm-2 col-form-label bg-success"  >status</label>
    <div class="col-sm-10">
      <input type="text" value={User.status} class="form-control" onChange={(e)=>{handlestatus(e)}} />
    </div>
    </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success" >Due_date</label>
    <div class="col-sm-10">
      <input type="text" class="form-control"  value={User.due_date} onChange={(e)=>{handleDue_date(e)}}/>
    </div>
  
  </div>
  <div class="mb-3 row">
    <label for="inputPassword" class="col-sm-2 col-form-label bg-success" >Assigned_user</label>
    <div class="col-sm-10">
      <input type="text" class="form-control" value={User.assigned_user} onChange={(e)=>{handleassigned_user(e)}}/>
    </div>
    </div>


    <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Save</div>
    </div>
)}
   </> 
  )
}