import React, { Component } from 'react';
import Chat from './Chat.jsx';

export default class Chats extends Component {
    render() {
        const arr = [1,2,3,4,5,6,7,89,11,24,57,46,88,34,89,23]
        const num = arr.map(ar => <Chat key={ar}/>)
        return (
            <div>
                {num}
            </div>
        )
    }
}
