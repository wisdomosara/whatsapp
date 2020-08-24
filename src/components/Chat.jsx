import React, { Component } from 'react'

class Chat extends Component {
    
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
    const read = {
        backgroundColor : "transparent",
        borderRadius : "50%"
    }
    return (
      <>
        <div className="item d-flex px-3  align-items-center">
            <div className="person d-flex align-items-center">
                <img src="favicon.ico" width="55px" className="mr-2"></img>
            </div>
            <div className="chat-right pb-3 pt-3">
                <div className="name">
                        <h6 className="mb-2">Name</h6>
                        <p className="mb-0"><i className="fas fa-check-double mr-1 "></i>This is the message</p>
                </div>
                <div className="time d-flex flex-column float-right">
                    <p className="mb-1">12:26pm</p>
                    <div style={unread} className="mr-2">
                        <p className="mb-0 count">3</p>
                    </div>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Chat
