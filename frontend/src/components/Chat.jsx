import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import axios from 'axios'

class Chat extends Component {

    handleCount = () => {
        if(this.props.chat.message[this.props.chat.message.length - 1].new == true) {
            axios.post('/updateMessageCount', {
                id: this.props.chat._id,
                message: false
            })
            this.props.chat.message[this.props.chat.message.length - 1].new = false
        }
    }
    render() {
        
    const unread = {
        backgroundColor : "#25d366",
        borderRadius : "50%",
        display:"flex",
        width: 20,
        height: 20,
        color:"white",
        marginLeft: "auto",
        alignItems: "center",
        justifyContent: "center"
    }
    // const read = {
    //     backgroundColor : "transparent",
    //     borderRadius : "50%"
    // }
    return (
      <>
        <div className="item d-flex px-3  align-items-center" >
            <div className="person d-flex align-items-center">
                <img src={this.props.chat.image} alt='heads' width="55px" height="55px" className="mr-3" ></img>
            </div>
            <Link to={`/${this.props.chat._id}`} className="click">
                <div className="chat-right pb-3 pt-3" onClick={this.handleCount}>
                    <div className="name">
                        <h6 className="mb-1 text-dark pt-2">{this.props.chat.name}</h6>
                        <p className="mb-0 message">{!this.props.chat.message[this.props.chat.message.length - 1].sent ? null : this.props.chat.message[this.props.chat.message.length - 1].seen ? <img src="img/whatsdouble.png" width="15px"></img> : <i className="fas fa-check mr-1 "></i>}{this.props.chat.message[this.props.chat.message.length - 1].text.length > 20 ? this.props.chat.message[this.props.chat.message.length - 1].text.substring(0,20) + "..." : this.props.chat.message[this.props.chat.message.length - 1].text}</p>
                    </div>
                    <div className="time d-flex flex-column float-right">
                        <p className="mb-2 pt-2" style={this.props.chat.message[this.props.chat.message.length - 1].sent ? null : !this.props.chat.message[this.props.chat.message.length - 1].sent && this.props.chat.message[this.props.chat.message.length - 1].new ? {color : "#25d366"} : null}>{this.props.chat.message[this.props.chat.message.length - 1].time}</p>
                        {this.props.chat.message[this.props.chat.message.length - 1].sent ? null : this.props.chat.message[this.props.chat.message.length - 1].new ? <div style={unread} className="mr-4">
                        <p className="mb-0 count">{this.props.chat.message[this.props.chat.message.length - 1].newCount}</p>
                        </div> : null}
                    </div>
                </div>
            </Link>
        </div>
      </>
    )
  }
}

export default Chat
