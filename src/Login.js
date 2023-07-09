import { useNavigate } from "react-router-dom";
import {useState} from 'react';

export default function Login() {
     const Navigate=useNavigate();

     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');

 
 const handleEmailChange = (e) => {
       setEmail(e.target.value);
          }

// function to update state of password with
// value enter by user in form
    const handlePasswordChange = (e) => {
      setPassword(e.target.value);
    }
    const handleSubmit = (e) =>  {
      if (email==='asha' && password=='asha') {
        
        //alert("login succesfully" +email);
      
        
      Navigate('./Users');

       
      } else {
        
            alert("Log in failed" );
            
      }
     e.preventDefault();
    }


    return(
   <>
   <div className="float-right  mt-5">
<center>
   <div className="form-signin mt-5  col-lg-4" >
  <form  className='shadow-lg p-3 mb-5 bg-white rounded'>
    
    <h1 className="h3  mb-3 fw-normal p-3">User Login</h1>

    <div className="form-floating p-3">
      <input type="text" className="form-control"  placeholder="UserName"   value={email} required onChange={(e) => { handleEmailChange(e) }}/>
      <label for="floatingInput pt-1">UserName</label>
    </div>
    <div className="form-floating p-3">
      <input type="password" className="form-control "   placeholder="Password"  value={password} required onChange={(e) => { handlePasswordChange(e) }}/>
      <label for="floatingPassword pt-1 ">Password</label>
    </div>

    <div className="checkbox mb-3">
      <label>
        <input type="checkbox" value="remember-me"/> Remember me
      </label>
    </div>
    <button className="w-10 btn btn-lg btn-primary" type="submit"onClick={(e) => { handleSubmit(e) }}>Sign in</button>
    <p className="mt-5 mb-3 text-muted">&copy; 2023</p>
  </form>
</div>
</center>
  </div>
   </>


    );



}