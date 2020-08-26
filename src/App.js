import React, {Component} from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Camera from './components/Camera'
import Chats from './components/Chats';
import Status from './components/Status';
import Calls from './components/Calls';
import ChatInterface from './components/ChatInterface'
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import { connect } from 'react-redux';

class App extends Component {
 
componentDidUpdate() {
  if(this.props.clicked) {
    console.log("clickedd")
    document.querySelector(".header").style.display = "none"
  }
  else{
    console.log("clickedd")
    document.querySelector(".header").style.display = "block"
  }
  
}
 componentDidMount() {
  
  // When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the header
var header = document.querySelector(".controls");

// Get the offset position of the navbar
var sticky = header.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}
 }

  render () {
    console.log(this.props)
      return (
      <>
        <BrowserRouter>
          <Navbar/>
          <Switch>
            <Route path='/' exact component={Chats}/>
            <Route path='/camera' exact component={Camera}/>
            <Route path='/chats' exact component={Chats}/>
            <Route path='/status' exact component={Status}/>
            <Route path='/calls' exact component={Calls}/>
            <Route path = '/chats/:id' exact component= {ChatInterface}/>
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
