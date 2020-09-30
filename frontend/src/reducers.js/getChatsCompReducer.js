import {CHATS_COMP} from './types'
import {UPDATE_MESSAGE} from './types'
import {UPDATE_COUNT} from './types'
import reduceUpdate from './reduceUpdate'
import reduceCount from './reduceCount'


const initialState = []
export default function (state = initialState, action) {
    switch (action.type) {
      case CHATS_COMP:
        initialState.push(...action.chats)
        return [...state]
      case UPDATE_MESSAGE: 
       return state.map(post =>  reduceUpdate(post, action))
      case UPDATE_COUNT: 
      return state.map(post =>  reduceCount(post, action))
      default:
       return state;
   }
}