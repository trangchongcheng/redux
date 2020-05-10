import { combineReducers } from "redux";
import stateModalReducer from '../reducers/ModalReducer'

//rootReducer là state (state tổng của toàn ứng dụng)
//reducer là state của redux
const rootReducer = combineReducers({
    //Nơi khai báo các state của ứng dụng
    stateModalReducer:stateModalReducer
})


export default rootReducer;