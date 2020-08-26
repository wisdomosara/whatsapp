import React, { Component } from 'react';
import Chat from './Chat.jsx';
import { connect } from 'react-redux';
import { getChatsComp } from '../actions.js/getChatCompAction';


 class Chats extends Component {
    
     componentDidMount() {
         getChatsComp()
         
     }
    render() {
        const num = this.props.chatsComp.chats.map(chat => <Chat key={chat.id} chat={chat} />)
        return (
            <div>
                {num}
            </div>
        )
    }
   
}
const mapStateToProps = (state) => ({
    chatsComp : state.chatsComp
})

const mapDispatchToProps = (dispatch) => {
    return {
        getChatsComp: () => {dispatch(getChatsComp())}
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Chats)
