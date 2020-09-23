import { UPDATE_MESSAGE } from "./types";

export default function reduceUpdate(post, action) {
    if(post.id !== action.id) {
        return post
    }  
    else {
        console.log(post.message)
        return Object.assign({}, post, {message: [...post.message,...action.message]})
    }
       
}