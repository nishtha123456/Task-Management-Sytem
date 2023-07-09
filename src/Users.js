import axios from 'axios'
import { useEffect,useState } from 'react';
import { useNavigate } from 'react-router-dom';
export var title1,description1,status1,due_date1,assigned_user1;
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
        }).then(res=>{console.log("Users Task fetched:",res.data);setUsers(res.data);});
        
      },[])
    
      const handleAdd =()=>{

        Navigate('./AddTask');
      }
      const handleEdit =(User)=>{
       console.log("title=" ,User.title);
       title1=User.title;
       description1=User.description;
       status1=User.status;
       due_date1=User.due_date;
       assigned_user1=User.assigned_user;
       console.log("title1=" ,title1);
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

  
  <div class="table-responsive container-fluid" style={{height:'80%',width:'80%'}}>
     <div className="btn btn-primary m-2" onClick={()=>{handleAdd();}}>Add Task</div>
     <h1 className='text-center mb-5'>User Tasks Dashboard</h1>
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