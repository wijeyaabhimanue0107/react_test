import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loginscreen from './Compornents/Loginscreen/Loginscreen';
import Profile from './Compornents/Loginscreen/Profile';
import ToDo from './Compornents/Loginscreen/ToDo';
//import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import Navbar from './Compornents/Loginscreen/navbar';

const App = () => (


  <Router>
    
    {/* <Popup trigger={<button> Trigger</button>}>
    <div>Popup content here !!</div>
    </Popup> */}

    <Switch>
      <Route path="/" exact component={Loginscreen} />
      <Route path="/todos" component={Profile} />
      {/* <Route path="/" exact component={Navbar} /> */}

      <Route path="/todos" exact component={Profile} />
      <Route path="/" exact component={ToDo} />
      {/* <Route path="/" exact component={Loginscreen} /> */}
    </Switch>
  </Router>


);
export default App;
