import { NavLink } from 'react-router-dom';
function Contact() {
    return (
      <div>
      <h1>Contact Page</h1>
      <br/>
    <NavLink to="/">Home</NavLink> <NavLink to="/about">About</NavLink>
    </div>
    );
  }
  
export default Contact;
  