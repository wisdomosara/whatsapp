import  {CHATS_COMP}  from '../reducers.js/types'
import axios from 'axios'


export  const getChatsComp = () => {
        return (dispatch) => {
        axios.get("/api/chats")
        .then(response => {
            dispatch({
                type: CHATS_COMP,
                chats: response.data
            })
        }) 
    }
};