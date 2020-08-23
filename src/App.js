import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Chats from './components/Chats';
import Status from './components/Status';
import Calls from './components/Calls';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Chats}/>
          <Route path='/chats' exact component={Chats}/>
          <Route path='/status' exact component={Status}/>
          <Route path='/calls' exact component={Calls}/>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
