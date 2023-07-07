import axios from 'axios'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
export var id;
export default function Users()
{
    var [Users,setUsers]=useState([]);
  const Navigate=useNavigate();
  

    useEffect(()=>{
        axios({
          method: "GET",
          url: "http://localhost:5000/",
          headers: {
            "Content-Type": "application/json"
          }
        }).then(res=>{console.log("Users Task fetched:",res.data);setUsers(res.data)});
        
      },[])
    
      const handleAdd =()=>{

        Navigate('./AddTask');
      }
      const handleEdit =(user)=>{
        id=user.id;
        Navigate('./EditTask');
      }
      const  handledelete=(User) =>{
        axios.delete('http://localhost:5000/', { data: { id: User.id } })
        .then(res=>{ console.log('Data deleted',res.data);})
        .catch(err => {
          console.error(err);
         });
          let allusers=[...Users];
          let  index=allusers.indexOf(User)
           console.log("index",index) 
           
           allusers.splice(index,1);
          setUsers(allusers);
           
          console.log("refresh")
          
     }

return(

  
  <div class="table-responsive container-fluid">
     <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Add Task</div>
    <table className="table table-success table-striped">
    <thead>
        <tr>
        <th>Title</th>
        <th>Description</th>
        <th>Status</th>
        <th>due_date</th>
        <th>Assigned User</th>
        <th></th>
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

    <td><div className="btn-group">
      <div className="btn btn-danger m-2" onClick={()=>{handledelete(User);}}>Delete</div>
    <div className="btn btn-primary m-2" onClick={()=>{handleEdit(User);}}>Edit</div>
    </div>
    </td>
    </tr>
    )}
    </tbody>
    
              
   
    
    
   
    
              
    </table>
    </div>
 
);

}