import {CHATS_COMP} from './types'
import {UPDATE_MESSAGE} from './types'
import reduceUpdate from './reduceUpdate'


const initialState = [
        {
            id : 1,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x400',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }]
        },
        {
            id : 2,
            name : "Ese",
            image : 'https://source.unsplash.com/random/200x350',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: false,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 2,
                new: true
            }]
        },
        {
            id : 3,
            name : "Victor",
            image : 'https://source.unsplash.com/random/200x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }]
        },
        {
            id : 4,
            name : "Precious",
            image : 'https://source.unsplash.com/random/250x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: false,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: true,
                newCount: 1,
                new: true
            }]
        },
        {
            id : 5,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }],
        },
        {
            id : 6,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }],
        },
        {
            id : 7,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }],
        },
        {
            id : 8,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: true,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: false,
                newCount: 0,
                new: false
            }],
        },
        {
            id : 9,
            name : "Precious",
            image : 'https://source.unsplash.com/random/250x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: false,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: true,
                newCount: 1,
                new: true
            }]
        },
        {
            id : 10,
            name : "Precious",
            image : 'https://source.unsplash.com/random/250x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: false,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: true,
                newCount: 1,
                new: true
            }]
        },
        {
            id : 11,
            name : "Precious",
            image : 'https://source.unsplash.com/random/250x300',
            message : [{
                text: "new message",
                id: new Date().toLocaleTimeString(),
                sent: false,
                time: new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
                seen: true,
                newCount: 1,
                new: true
            }]
        },
        
    ]
export default function (state = initialState, action) {
    switch (action.type) {
      case CHATS_COMP:
        return [...state];
       case UPDATE_MESSAGE: 
       return state.map(post =>  reduceUpdate(post, action))
      default:
       return state;
   }
}