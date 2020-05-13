import { SET_ALERT, REMOVE_ALERT } from '../actions/types';

const AlertReducer=(state=[],action)=>{
    switch (action.type) {
        case SET_ALERT:
            return [...state,action.payload]
        case REMOVE_ALERT:
            return state.filter(alert=> alert.id !== action.payload)   
            break;
    
        default:
            return state;
    }
}


export default AlertReducer;
