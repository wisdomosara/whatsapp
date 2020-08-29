import React, { Component } from 'react';
import Chat from './Chat.jsx';
import { connect } from 'react-redux';
import { getChatsComp } from '../actions.js/getChatCompAction';
import Navbar from './Navbar';


 class Chats extends Component {
    
     componentDidMount() {
         getChatsComp()
         if(document.querySelector(".header")) {
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
         
     }
    render() {
        const num = this.props.chatsComp.chats.map(chat => <Chat key={chat.id} chat={chat} />)
        return (
            <div>
                <Navbar/>
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
