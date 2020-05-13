import {combineReducers} from 'redux';
import AnnonceReducer  from './annonceReducer';
import {reservReducer} from './reservReducer';
import AuthReducer from './AuthReducer';
import AlertReducer from './AlertReducer';


export default combineReducers({reserv:reservReducer,annonce:AnnonceReducer,auth:AuthReducer,alert:AlertReducer})