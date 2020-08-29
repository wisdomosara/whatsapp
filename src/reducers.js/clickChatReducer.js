


const initialState = {
    clicked : false
} 
export default function (state = initialState, action) {
    switch (action.type) {
        case "CLICK_CHAT":
        return {
          ...state,
          clicked: true
       };
       case "BACK_CHAT":
        return {
          ...state,
          clicked: false
       };
      default:
       return state;
   }
}