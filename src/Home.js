import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Home.css';
import data from './data.json';

const Home = () => {
  return (
    <div>
      <div className='d-flex card_design'>

      {data.map((value) =>(
        <Card title={value.name} desc={value.bio} image={value.image} />
      ))}
      
      </div>
    </div>
  );
}


export default Home;
