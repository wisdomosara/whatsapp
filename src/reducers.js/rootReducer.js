import { combineReducers } from 'redux';
import  {getChatsCompReducer, clickChatReducer}  from './allReducer';

const rootReducer = combineReducers({
 chatsComp : getChatsCompReducer,
 clicked : clickChatReducer
});

export default rootReducer;