import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Camera from './components/Camera'
import Chats from './components/Chats';
import Status from './components/Status';
import Calls from './components/Calls';
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class App extends Component {
 state = {
   view: false
 }
  render () {
      return (
      <>
        <BrowserRouter>
          <Navbar />
          <Switch>
            <Route path='/' exact component={Chats}/>
            <Route path='/camera' exact component={Camera}/>
            <Route path='/chats' exact component={Chats}/>
            <Route path='/status' exact component={Status}/>
            <Route path='/calls' exact component={Calls}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
  
}

export default App;
