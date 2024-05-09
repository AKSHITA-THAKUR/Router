import React from 'react';
import { Outlet } from 'react-router-dom'
const ContactPage = () => {
 return(
<div className='cont'>
<h1 style={{backgroundColor: "lightgreen", textAlign: "center"}}> This is the contact page</h1>

<div>
      <Outlet/>
      </div>
      </div>
 )
};

export default ContactPage;
