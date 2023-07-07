import axios from 'axios'
import { useEffect,useState } from 'react';

export default function AdminDashboard()
{
    var [Users,setUsers]=useState([]);


    useEffect(()=>{
        axios({
          method: "GET",
          url: "http://localhost:5000/",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{console.log("Users Task fetched:",res.data);setUsers(res.data)});
        
      },[])
    
      const handleonSort=()=>{
        axios({
          method: "GET",
          url: "http://localhost:5000/sort",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{console.log("Users Task fetched:",res.data);setUsers(res.data)});
       
      }
   
return(
    <div class="table-responsive container-fluid">
      <h1 className='text-center'>Admin Dashboard</h1>
      <div className="btn btn-primary m-2" onClick={()=>{handleonSort();}}>SortTask by Title Alphabetically</div>
<table className="table table-success table-striped">

    <thead>
        <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>due_date</th>
        <th>Assigned User</th>
        </tr>
    </thead>
    <tbody>
    {Users.map((User)=>
    <tr>
    <td>{User.title}</td>
    <td>{User.description}</td>
    <td>{User.status}</td>
    <td>{User.due_date}</td>
    <td>{User.assigned_user}</td>
    
    </tr>
    )}
    </tbody>
    </table>
    </div>
);

}