import { BUY_BOOK } from "./Booktype"

const initialState={
    numberofBooks:10
}
const Bookreducer = (state=initialState,action) => {
switch (action.type){
         case BUY_BOOK:
             return{
                 ...state,numberofBooks:state.numberofBooks-1
             }
             default:
                 return state
}
}

export default Bookreducer
