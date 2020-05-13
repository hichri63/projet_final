import {REGISTER_SUCCES,REGISTER_FAIL,LOGIN_SUCCES,LOGIN_FAIL,AUTH_ERRORS,CLEAR_ERRORS,LOGOUT,USER_LOGED} from  '../actions/types'


const initialState={
    token:localStorage.getItem('token'),
    isAuthenticated:null,
    error:null,
    
}

const AuthReducer=(state=initialState,action)=>{
    switch (action.type) {
        case USER_LOGED:
            return{
                ...state,
                isAuthenticated:true,
                user:action.payload
            }

        
        case LOGIN_SUCCES:
        case REGISTER_SUCCES:
            localStorage.setItem('token',action.payload.token)
            return{
                ...state,
               ...action.payload,
               isAuthenticated:true
              

            }
        case LOGOUT:
        case LOGIN_FAIL:
        case AUTH_ERRORS:     
        case REGISTER_FAIL:
            localStorage.removeItem('token')
        return {
            ...state,
            token:null,
            user:null,
            isAuthenticated:false,
            error:action.payload

        }
        case CLEAR_ERRORS:
            return{
                ...state,
                error:null
            }
    
        default:
            return state
    }
}
export default AuthReducer;