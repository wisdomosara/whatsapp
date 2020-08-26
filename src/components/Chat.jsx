import React, { Component } from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux';
import {clickChat} from '../actions.js/clickChatAction'

class Chat extends Component {

    handleClick = () =>{
        this.props.clickChat()
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
                <img src={this.props.chat.image} alt='heads' width="55px" className="mr-3" ></img>
            </div>
            <Link to={`/chats/${this.props.chat.id}`} className="click" onClick={this.handleClick}>
                <div className="chat-right pb-3 pt-3" >
                    <div className="name">
                            <h6 className="mb-2 text-dark">{this.props.chat.name}</h6>
                            <p className="mb-0 message">{!this.props.chat.send ? null : <i className="fas fa-check-double mr-1 "></i>}{this.props.chat.message[0]}</p>
                    </div>
                    <div className="time d-flex flex-column float-right">
                        <p className="mb-1" style={this.props.chat.send ? null : !this.props.chat.send && this.props.chat.new ? {color : "#25d366"} : null}>{this.props.chat.time}</p>
                        {this.props.chat.send ? null : this.props.chat.new ? <div style={unread} className="mr-2">
                            <p className="mb-0 count">{this.props.chat.newCount}</p>
                        </div> : null}
                    </div>
                </div>
            </Link>
        </div>
      </>
    )
  }
}
const mapStateToProps = (state) => ({
    clicked : state.clicked
})

const mapDispatchToProps = (dispatch) => {
    return {
        clickChat: () => {dispatch(clickChat())}
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Chat)
