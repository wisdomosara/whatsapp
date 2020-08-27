import React, {Component} from 'react';
import './App.css';

import Camera from './components/Camera'
import Chats from './components/Chats';
import Status from './components/Status';
import Calls from './components/Calls';
import ChatInterface from './components/ChatInterface'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class App extends Component {
 
  render () {
    console.log(this.props)
      return (
      <>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact component={Chats}/>
            <Route path='/camera' exact component={Camera}/>
            <Route path='/chats' exact component={Chats}/>
            <Route path='/status' exact component={Status}/>
            <Route path='/calls' exact component={Calls}/>
            <Route path = '/:id' exact component= {ChatInterface}/>
          </Switch>
        </BrowserRouter>
      </>
    );
  }
}
const mapStateToProps = (state) => ({
  clicked : state.clicked.clicked
})

export default connect(mapStateToProps)(App);
