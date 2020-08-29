import React, { Component } from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {backChat} from '../actions.js/backChatAction'
import image from '../img/favicon.ico'


class ChatInterface extends Component {
  state = {
    input : '',
    messageArr : [],
    received : false,
    receiveds : false
  }
  handleClick = () => {
    this.props.backChatCall("wisdom")
    console.log(this.props)
}
handleSubmit = (e) => {
  e.preventDefault()
  
  this.state.messageArr.push(
    {
      text: this.state.input,
      id: new Date().toLocaleTimeString(),
      time: new Date().toLocaleTimeString(),
    }
  );
  this.setState({
    input : ""
  })
  console.log(this.state)
  
  setTimeout(() => {
    console.log("wisdom")
    this.setState({
      received : true
    })
  },1000)
  setTimeout(() => {
    console.log("wisdom")
    this.setState({
      receiveds : true
    })
  },2000)
}
handleInput = () => {
  this.setState(() => {
    return {input : document.querySelector("input").value}
  })

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
    const body = {
      backgroundColor : "rgb(216, 214, 214)",
      minHeight: "100vh"
    }
    let chatItem = this.state.messageArr.map(item => <Chate  key={item.id} text={item.text} time={item.time} state={this.state}/>)
    console.log(this.state.messageArr)
    return (
      <div style={body}>
        <div className="d-flex px-3 justify-content-between align-items-center py-1 mb-2" style={background}>
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
        <div className="float-right px-2">{chatItem}
        </div>
        <div style={{clear: "both"}}><Chater state={this.state}/></div>
        <div className="d-flex bottom-flex justify-content-between px-2">
          <div className="d-flex align-items-baseline mr-2 bg-white bottom-left pr-3  pl-2 py-2">
            <i className="fas fa-smile mr-2"></i>
            <form onSubmit={this.handleSubmit}><input placeholder="Type a message" className="input" value={this.state.input} onChange={this.handleInput}></input></form>
            <div className="ml-auto"><i className="fas fa-paperclip mr-3" style={transform}></i>
            <i className="fas fa-camera "></i></div>
          </div>
          <div className="d-flex justify-content-center align-items-center bottom-right" style={microphone}>
            {this.state.input.length > 0 ? <i className="fas fa-paper-plane"   onClick={this.handleSubmit}></i> : <i className="fas fa-microphone " ></i>}
          </div>
          
        </div>
      </div>
    )
  }
}
function Chater(props) {
  return (
    <div style={{maxWidth: "70%"}}>
      {props.state.receiveds ? <div className="bg-white py-2 px-2 d-flex align-items-baseline rounded mb-1">
      <p className="mr-2 mb-0">this is just an animated message testing out logic</p>
      <p className="mr-1 mb-0" style={{color: "rgb(121, 121, 121)", fontSize:12}}>{props.time}</p>
    </div> : null}
    </div>
    
  )
}
function Chate(props) {
  return (
    <div className="bg-white py-2 px-2 d-flex align-items-baseline rounded mb-1">
      <p className="mr-2 mb-0">{props.text}</p>
      <p className="mr-1 mb-0" style={{color: "rgb(121, 121, 121)", fontSize:12}}>{props.time}</p>
      {props.state.received ? <i className="fas fa-check-double" style={{color:"blue", fontSize:12}}></i> : <i className="fas fa-check" style={{color:"grey", fontSize:12}}></i>}
    </div>
  )
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
