import React from 'react';
import '../../App.css';
import { useHistory } from "react-router";
import './Signin.css';
function Signin() {

    let history = useHistory();
  return(
  <div className="Fullpage">

     <div className="form-group2">
       <h3>Sign in</h3><br />
     </div>
   
  <div className="form-group5">
 
      <label>Email address</label><br />
      <input type="email" className="form-control" placeholder="Enter email" />
  </div>

  <div className="form-group5">
      <label>Password</label><br />
      <input type="password" className="form-control" placeholder="Enter password" />
  </div>
  <div className="form-group5">
  <button  type="submit" className="btn btn-primary btn-block" onClick={()=>{history.push('/')}}>Sign Up</button>
  </div>
   
  <div className="form-group5">
  <p >
      If not registered  <a href="http://localhost:3000/signup">click here?</a>
  </p>
  </div>

  
</ div >
  );
}
export default Signin;