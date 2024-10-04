import { NavLink } from 'react-router-dom';
import Card from './Card';
import './Home.css';

function Home() {
  return (
    <div>
      <div className='d-flex card_design'>

        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
        <Card title="test" desc="testing testing" image="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />

      </div>
    </div>
  );
}


export default Home;
