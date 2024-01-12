import React from 'react';
import '../../App.css';
import './Connect.css';



export default function Connect() {
   
  return (
    <>
    <div className='top'></div>
    {/* <img  src='/images/connect.jpg'  / */}
     <div><h1 className='connect'>Are you ready to plan your event?</h1> 
   <p1 className='paragraph'>
   If you are ready to plan your event or if you just simply want to ask a question or two, please submit <br/>
   the form below and connect with us now – we look forward to assisting you with all of your event<br/>
   planning needs!
   </p1>
    </div>
    <div className="half">
    <div className="form-group1">
      <label>Contact</label><br />
      <input type="text" className="form-control" placeholder="First name" />
  </div>

  <div className="form-group1">
    <input type="text" className="form-control" placeholder="Last name" />
  </div>
  <div className="form-group1">
      <label>Phone</label><br />
      <input type="text" className="form-control" placeholder="Phone" />
  </div>

  <div className="form-group1">
      <label>Email address</label><br />
      <input type="email" className="form-control" placeholder="Enter email" />
  </div>
  <div className="form-group1">
      <label>Event Date</label><br />
      <input type="date" className="form-control"/>
  </div>
  <div className="form-group1">
      <label>Location</label><br />
      <input type="text" className="form-control" placeholder="Venue name" /><br />
      <input type="text" className="form-control" placeholder="City" /><br/>
      <input type="text" className="form-control" placeholder="State" />
  </div>
  <div className="form-group1">
      <label>Guest Count</label><br />
      <input type="text" className="form-control"/>
  </div>
  <div className="form-group1">
      <label>Budget</label><br />
      <input type="text" className="form-control" />
  </div>
  <div className="form-group1">
      <label>Message</label><br />
      <input type="text" className="form-control" />
  </div>
  <div className="form-group">
  <button  type="submit" className="btn btn-primary btn-block" /*onClick={()=>{history.push('/')}}*/>Send</button>
  </div>
  </div>
  </>
  );
}