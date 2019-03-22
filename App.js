import React, { Component } from 'react';

import './App.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="App">
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <p>
//             Edit <code>src/App.js</code> and save to reload.
//           </p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//         </header> */}







//       </div>
//     );
//   }
// }


const App = () => <PersonList />;

const PersonList = () => {

  const people = [


    {
      img: 22,
      name: 'siva',
      job: 'developer'
    },

    {
      img: 34,
      name: 'siva',
      job: 'developer'
    }
    ,
    {
      img: 56,
      name: 'siva',
      job: 'developer'
    }
  ]




  return <section>
    <Person person={people[0]} />;
     <Person person={people[1]} />;
     <Person person={people[2]} />;
  </section>
}

const Person = (props) => {
  const { children } = props;
  return props.person?(<div className='person'>
    <img src={"https://randomuser.me/api/portraits/thumb/men/" + props.person.img + ".jpg"} alt='' />
    <div>
      <h4>{props.person.name}</h4>
      <h4>{props.person.job}</h4>
    </div>

  </div>
  ):null
}



export default App;
