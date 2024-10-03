import { NavLink } from 'react-router-dom';
function Home() {
    return (
      <div>
        <h1>Home Page</h1>
        <br/>
      <NavLink to="/about">About</NavLink> <NavLink to="/contact">Contact</NavLink>
      </div>
    );
  }
  
export default Home;
  