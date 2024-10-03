import { NavLink } from 'react-router-dom';
function About() {
    return (
          <div>
          <h1>About Page</h1>
          <br/>
        <NavLink to="/">Home</NavLink> <NavLink to="/contact">Contact</NavLink>
        </div>
      );
  }
  
  export default About;
  