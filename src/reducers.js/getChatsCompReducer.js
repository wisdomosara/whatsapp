import {CHATS_COMP} from './types'


const initialState = {
    chats : [
        {
            id : 1,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x400',
            message : ["well this is a dummy message i sent", "previously sent"],
            new : false,
            send : true,
            newCount : 0,
            time: "12:30pm"
        },
        {
            id : 2,
            name : "Ese",
            image : 'https://source.unsplash.com/random/200x350',
            message : ["well this is a dummy message received", "previously sent"],
            new : false,
            newCount : 0,
            send : false,
            time: "2:30pm"
        },
        {
            id : 3,
            name : "Victor",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message i received", "previously sent"],
            new : true,
            newCount : 1,
            send : false,
            time: "1:30pm"
        },
        {
            id : 4,
            name : "Precious",
            image : 'https://source.unsplash.com/random/250x300',
            message : ["well this is a dummy message from the redux store", "previously sent"],
            new : true,
            newCount : 3,
            send : false,
            time: "11:30pm"
        },
        {
            id : 5,
            name : "Osara",
            image : 'https://source.unsplash.com/random/300x300',
            message : ["well this is a dummy message from the redux store", "previously sent"],
            new : true,
            newCount : 2,
            send : false,
            time: "10:30pm"
        },
        {
            id : 6,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x400',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 7,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 8,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 9,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 10,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 11,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 12,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 13,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 14,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 15,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 16,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 17,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 18,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 19,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        },
        {
            id : 20,
            name : "Wisdom",
            image : 'https://source.unsplash.com/random/200x300',
            message : ["well this is a dummy message", "previously sent"],
            new : false,
            newCount : 0,
            send : true,
            time: "12:30pm"
        }
    ]
} 
export default function (state = initialState, action) {
    switch (action.type) {
      case CHATS_COMP:
        return {
          ...state
       };
      default:
       return state;
   }
}