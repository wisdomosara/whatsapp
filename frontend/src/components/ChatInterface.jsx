import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link, Redirect} from 'react-router-dom'
import {updateMessage} from '../actions.js/updateMessageAction'
import io from 'socket.io-client'
import { getChatsComp } from '../actions.js/getChatCompAction';
import axios from 'axios'
import ScrollToBottom from 'react-scroll-to-bottom';


class ChatInterface extends Component {
  state = {
    input : '',
    messageArr : [],
    received : false,
    receiveds : true
  }


handleSubmit = (e) => {
  e.preventDefault()
  if(this.state.input) {
      this.state.messageArr.push(
      {
        text: this.state.input,
        id: new Date().toLocaleTimeString(),
        sent: true,
        time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
        seen: false,
        newCount: 0,
        new: false
      }
    );

    this.setState({
      input : ""
    })
    if(this.props.chatsComp[0].message.length === 1) {
      
      setTimeout(() => {
        this.props.updateMessage([{
          text: "Hello there! This is just an Automated message from Wisdom.",
          id: new Date().toLocaleTimeString(),
          sent: false,
          time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
          seen: false,
          newCount: 0,
          new: false
        }], this.props.chatsComp[0]._id)
        this.setState({
          receiveds: true
        })
      },1500)
    }
    setTimeout(() => {
      this.setState({
        received : true
      })
    },1000)
  }

  this.props.updateMessage(this.state.messageArr, this.props.chatsComp[0]._id)
  
  this.setState({
    messageArr : []
  })
}
handleInput = () => {
  this.setState(() => {
    return {input : document.querySelector("input").value}
  })
}
componentDidMount() {
  const socket = io.connect("http://localhost:5000")
  console.log(this.props.chatsComp)
  this.props.getChatsComp()
  
}
componentWillUnmount() {
  
}
  render() {
    const link = {
      textDecoration: "none",
      color: "white"
    }
    const img ={
      borderRadius: "50%",
      objectFit: "cover"
    }
    const background = {
      backgroundColor : "rgba(7, 94, 84, 0.759)",
      color: "white"
    }
    const microphone = {
      backgroundColor : "rgba(7, 94, 84, 0.759)",
      color: "white",
      borderRadius: "50%"
    }
    const transform = {
      transform : "rotate(90deg)"
    }
    const trans =  {
      transform : "rotate(50deg)"
    }
    const body = {
      backgroundColor : "rgb(216, 214, 214)",
      height:"100%",
      width: "100%",
    }
    const main = {
      overflowY: "scroll",
      height: "calc(100% - 64px - 70px)",
    }
 
    let chatItem = []
    
    if(this.props.chatsComp.length > 0) {
      this.props.chatsComp[0].message.forEach(item => {
        return item.sent ? chatItem.push(<Chate  key={item._id} text={item.text} time={item.time} state={this.state} seen={item.seen} />) : chatItem.push(<Chater  key={item._id} text={item.text} time={item.time} state={this.state}/>)
      })
    
    return (
      <div style={body}>
        <div className="d-flex px-3 justify-content-between align-items-center py-1 mb-2" style={background}>
            <div className="d-flex  align-items-center">
              <Link to={`/chats`} style={link}><i className="fas fa-arrow-left   mr-2 "></i></Link>
              <img src="https://picsum.photos/200" alt="head" width="40px" className="mr-2" style={img}></img>
              <h6 className="mb-0">{this.props.chatsComp[0].name}</h6>
            </div>
            <div className="pb-3 pt-3">
                <i className="fas fa-video "></i>
                <i className="fas fa-phone   ml-4 " style={transform}></i>
                <i className="fas fa-ellipsis-v   ml-4 "></i>
            </div> 
        </div>
        <ScrollToBottom className="main">
          <div>{chatItem.length >= 1 ? chatItem : "no chats found"}
        </div>
        </ScrollToBottom>
      
        <div className="d-flex bottom-flex justify-content-between px-2  py-2">
          <div className="d-flex align-items-baseline mr-2 bg-white bottom-left pr-3  pl-2 py-2">
            <i className="fas fa-smile mr-2"></i>
            <form onSubmit={this.handleSubmit}><input placeholder="Type a message" className="input" value={this.state.input} onChange={this.handleInput} ></input></form>
            <div className="ml-auto">
              <i className="fas fa-paperclip mr-3" style={transform}></i>
              <i className="fas fa-camera "></i>
            </div>
          </div>
          <div className="d-flex justify-content-center align-items-center bottom-right" style={microphone}>
            {this.state.input.length > 0 ? <i className="fas fa-paper-plane pr-1" style={trans}  onClick={this.handleSubmit}></i> : <i className="fas fa-microphone " ></i>}
          </div>
          
        </div>
      </div>
    )}
    else {
      return (
        <div>
          
        </div>
      )
    }
  }
}
function Chater(props) {
  return (
    <div style={{boxSizing: "content-box"}}>
        <div className="bg-white py-2 px-2 ml-2 mt-2 d-flex align-items-baseline flex-wrap rounded mb-1 float-left" style={{maxWidth: "80%", clear: "both", wordWrap: "break-word", boxSizing: "border-box"}}>
        <p className="mb-0 mr-2" style={{maxWidth: "100%"}}>{props.text}</p>
        <p className="mb-0 ml-auto float-right" style={{color: "rgb(121, 121, 121)", fontSize:12, width:"55px"}}>{props.time}</p>
      </div> 
    </div>
    
  )
}
function Chate(props) {
  return (
    <div className="py-2 px-2 mr-2 d-flex align-items-baseline flex-wrap rounded mb-1 float-right" style={{maxWidth: "80%", clear: "both", wordWrap: "break-word", backgroundColor: "rgb(237, 248, 186)", boxSizing: "content-box"}}>
      <p className="mr-2 mb-0" style={{maxWidth: "100%"}}>{props.text}</p>
      <p className=" mb-0 ml-auto float-right" style={{color: "rgb(121, 121, 121)", fontSize:12}}>{props.time} { props.seen ? <i class="fas fa-check-double text-primary"></i> : <i class="fas fa-check  "></i>}</p>
    </div> 
  )
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  return {
    chatsComp : state.chatsComp.filter(fil => fil._id == id),
  }
  
}
const mapDispatchToProps = (dispatch) => {
  return {
      updateMessage: (message, id) => {dispatch(updateMessage(message, id))},
      getChatsComp: () => {dispatch(getChatsComp())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface)
