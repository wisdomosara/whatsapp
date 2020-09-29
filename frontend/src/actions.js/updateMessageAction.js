import {UPDATE_MESSAGE} from "../reducers.js/types"


export  const updateMessage = (message, id) => {
    return {
        type: UPDATE_MESSAGE,
        message : message,
        id: id
    }

};