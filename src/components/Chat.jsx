import React, { Component } from 'react'

class Chat extends Component {
    
  render() {
    const unread = {
        backgroundColor : "green",
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
        <div className="item d-flex px-3 py-2 justify-content-between align-items-center">
            <div className="person d-flex align-items-center">
                <img src="favicon.ico" width="50px" className="mr-2"></img>
                <div className="name">
                    <h6>Name</h6>
                    <p className="mb-0"><i className="fas fa-check-double mr-1 "></i>This is the message</p>
                </div>
            </div>
            <div className="time d-flex flex-column justify-content-end">
                <p className="mb-1">12:26pm</p>
                <div style={unread}>
                    <p className="mb-0">3</p>
                </div>
            </div>
        </div>
      </>
    )
  }
}

export default Chat
