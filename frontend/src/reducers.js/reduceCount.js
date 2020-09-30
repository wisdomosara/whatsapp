import axios from 'axios'

export default function reduceUpdate(post, action) {
    if(post._id !== action.id) {
        return post
    }  
    else {
        //pushing new messages to the database
        axios.post("/updateMessageCount", {
            id: action.id,
            message: action.message
        })
        console.log(post.message)
        return Object.assign({}, post, {message: [...post.message,...action.message]})
    }
       
}