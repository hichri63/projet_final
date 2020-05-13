import { ADD_TRANS, DELETE_TRANS, SAVE_MUSIC, UPDATE_TRANS, ClEAR_TRANS, ANNONCE_ERROR,GET_ANNONCE,REMOVE_CURRENT_ANNONCE,GET_All_ANNONCE } from '../actions/types';
// import { v4 as uuidv4 } from 'uuid';

const initialState =
{
    annonce: [],
    saved: null,
    error: null
}

const AnnonceReducer = (state = initialState, action) => {
    switch (action.type) {

        case GET_All_ANNONCE:
            return{
                ...state,
                annonce: action.payload
            }
            

        case GET_ANNONCE:
            return{
                ...state,
                annonce: action.payload
            }
        case ADD_TRANS: return {
            ...state,
            annonce: [...state.annonce, action.payload]
        }
        case DELETE_TRANS:
            return {
                ...state,
                annonce: state.annonce.filter(el => el._id !== action.payload)

            }
        case SAVE_MUSIC:
            return {
                ...state,
                saved: action.payload
            }
        case UPDATE_TRANS:
            return {
                ...state,
                annonce: state.annonce.map(el => el._id === action.payload._id ? action.payload : el)
            }
        case ClEAR_TRANS:
            return {
                ...state,
                saved: null
            }
        case ANNONCE_ERROR:
            return {
                ...state,
                error: action.payload
            }
            case REMOVE_CURRENT_ANNONCE:
                return{
                    ...state,
                    annonce:[]
                }
        default:
            return state;

    }
}
export default AnnonceReducer;