import { combineReducers } from 'redux';
import  {getChatsCompReducer, updateMessageReducer}  from './allReducer';

const rootReducer = combineReducers({
 chatsComp : getChatsCompReducer,
 Message: updateMessageReducer
});

export default rootReducer;