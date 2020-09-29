import {CHATS_COMP} from './types'
import {UPDATE_MESSAGE} from './types'
import reduceUpdate from './reduceUpdate'
import axios from 'axios'


const initialState = []
export default function (state = initialState, action) {
    switch (action.type) {
      case CHATS_COMP:
        initialState.push(...action.chats)
        return [...state]
      case UPDATE_MESSAGE: 
       return state.map(post =>  reduceUpdate(post, action))
      default:
       return state;
   }
}