import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {backChat} from '../actions.js/backChatAction'
import image from '../img/favicon.ico'
class ChatInterface extends Component {

  handleClick = () =>{
    this.props.backChatCall("wisdom")
    console.log(this.props)
}
  render() {
    const link = {
      textDecoration: "none",
      color: "white"
    }
    const img ={
      borderRadius: "50%"
    }
    const background = {
      backgroundColor : "#075E54",
      color: "white"
    }
    const microphone = {
      backgroundColor : "#075E54",
      color: "white",
      
      borderRadius: "50%"
    }
    const transform = {
      transform : "rotate(90deg)"
    }
    return (
      <>
        <div className="d-flex px-3 justify-content-between align-items-center py-1" style={background}>
            <div className="d-flex  align-items-center">
              <Link to={`/chats`} onClick={this.handleClick} style={link}><i className="fas fa-arrow-left   mr-2 "></i></Link>
              <img src={image} alt="head" width="40px" className="mr-2" style={img}></img>
              <h6 className="mb-0">{this.props.chatsComp[0].name}</h6>
            </div>
            <div className="pb-3 pt-3">
                <i className="fas fa-video "></i>
                <i className="fas fa-phone   ml-4 " style={transform}></i>
                <i className="fas fa-ellipsis-v   ml-4 "></i>
            </div>
            
        </div>
        <div className="d-flex bottom-flex justify-content-between px-2">
          <div className="d-flex align-items-baseline mr-2 bg-white bottom-left pr-3  pl-2 py-2">
            <i class="fas fa-smile mr-2"></i>
            <form><input placeholder="Type a message" className="input"></input></form>
            <div className="ml-auto"><i class="fas fa-paperclip mr-3" style={transform}></i>
            <i class="fas fa-camera "></i></div>
          </div>
          <div className="d-flex justify-content-center align-items-center bottom-right" style={microphone}>
            <i class="fas fa-microphone " ></i>
          </div>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  let id = ownProps.match.params.id
  console.log(state)
  return {
    chatsComp : state.chatsComp.chats.filter(fil => fil.id == id),
    clicked: state.clicked
  }
  
}
const mapDispatchToProps = (dispatch) => {
  return {
      backChatCall: () => {dispatch(backChat())}
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(ChatInterface)
