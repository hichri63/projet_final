import {GET_All_RESERVATION,UPDATE_RESERV} from '../actions/types';
const initialState={
    reservation:[]
}



export const reservReducer=(state=initialState,action)=>{
    switch (action.type) {
        case GET_All_RESERVATION:
            return {
                ...state,
                reservation:action.payload
            }
            case UPDATE_RESERV:
                return {
                    ...state,
                    reservation: state.reservation.map(el => el._id === action.payload._id ? action.payload : el)
                }
            
           
    
        default:
            return state;
    }
}