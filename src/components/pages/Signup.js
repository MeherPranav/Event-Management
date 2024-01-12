import React from 'react';
import '../../App.css';
import { useHistory } from "react-router";
function SignUp() {

    let history = useHistory();

    // const [user, setUser] = useState({
    //     First_name: "",Last_name: "",Mobile_number: "",Email_address: "",Password: "",Confirm_Password: ""
    // });

    // const PostData = async (e) => {
    //     e.preventDefault();

    //     const {First_name,Last_name,Mobile_number,Email_address,Password,Confirm_Password} = user;
    // }

  return(
  <div className="Fullpage">
  <div className="form-group">
      <h3>Register</h3>
  </div>
  <div className="form-group">
      <label>First name</label><br />
      <input type="text" className="form-control" placeholder="First name" />
  </div>

  <div className="form-group">
      <label>Last name</label><br />
      <input type="text" className="form-control" placeholder="Last name" />
  </div>
  <div className="form-group">
      <label>Mobile Number</label><br />
      <input type="text" className="form-control" placeholder="Mobile number" />
  </div>

  <div className="form-group">
      <label>Email address</label><br />
      <input type="email" className="form-control" placeholder="Enter email" />
  </div>

  <div className="form-group">
      <label>Password</label><br />
      <input type="password" className="form-control" placeholder="Enter password" />
  </div>
  <div className="form-group">
      <label>Confirm Password</label><br />
      <input type="password" className="form-control" placeholder="Enter password" />
  </div>

  <div className="form-group">
  <button type="submit" className="btn btn-primary btn-block"onClick={()=>{history.push('/') } }
 >Register </button>
    </div>
  
</ div >
  );
}
export default SignUp;