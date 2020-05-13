import  {ADD_RESERV,ANNONCE_ERROR,GET_All_RESERVATION,UPDATE_RESERV,RESERV_ERROR} from './types';
import axios from 'axios'
// Get all reservation
export const Getreservation=()=>dispatch=>{
    axios.get('/api/reservation').then(res=>{
        dispatch({
            type: GET_All_RESERVATION,
            payload: res.data
         })
        })

}

//add reservation
export const reserver = (newReservation) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.post('/api/reservation', newReservation, config)
        .then(res => dispatch({
            type: ADD_RESERV,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ANNONCE_ERROR,
            payload: err.response.msg

        }))
}
export const updatereser = (updatedAnnReserver) => dispatch => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }
    
        axios.put(`/api/reservation/reserve/${updatedAnnReserver._id}`,updatedAnnReserver,config)
        .then((res)=>{
            dispatch({
                    type: UPDATE_RESERV,
                    payload: res.data
    
                })
        })
        .catch(err => dispatch({
            type: RESERV_ERROR,
            payload: err.response.msg
    
        }))
        
        
}