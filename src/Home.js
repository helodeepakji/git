import { NavLink } from 'react-router-dom';
import Card from './Card';

// import json

[
  {
    title : 'test',
    des : 'test',
    image : 'dshjdj'
  },
  {
    title : 'test',
    des : 'test',
    image : 'dshjdj'
  },
  {
    title : 'test',
    des : 'test',
    image : 'dshjdj'
  },
  {
    title : 'test',
    des : 'test',
    image : 'dshjdj'
  },
  {
    title : 'test',
    des : 'test',
    image : 'dshjdj'
  },
  
]
function Home() {
  return (
    <div>
      <div className='d-flex'>

      // loop

        <Card title="..." desc=".." image="..." /> 
        
      /end loop/
      
      </div>
    </div>
  );
}


export default Home;
