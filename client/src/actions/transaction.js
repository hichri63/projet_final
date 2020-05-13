import { ADD_TRANS, DELETE_TRANS, SAVE_MUSIC, UPDATE_TRANS, ClEAR_TRANS, ANNONCE_ERROR, REMOVE_CURRENT_ANNONCE, GET_ANNONCE,GET_All_ANNONCE,UPDATE_RESERV,RESERV_ERROR} from './types';
import axios from 'axios'

//Gett all annonce
//public route
export const allannonce=()=>dispatch=>{
    axios.get('api/annonce/ann').then(res=>{
        dispatch({
            type: GET_All_ANNONCE,
            payload: res.data
         })
        })

}

//Get annonce
//private route
export const getAnnonce = () => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.get('/api/annonce', config)
        .then(res => dispatch({
            type: GET_ANNONCE,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: REMOVE_CURRENT_ANNONCE,
            payload: err.response.data.msg

        }))

}
//Remove current annonce
export const RemoveCurrentAnnonce=()=>dispatch=>{
    dispatch({
        type:REMOVE_CURRENT_ANNONCE
    })
}


//add annonce
export const addannonce = (newAnnonce) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }
    axios.post('/api/annonce', newAnnonce, config)
        .then(res => dispatch({
            type: ADD_TRANS,
            payload: res.data
        }))
        .catch(err => dispatch({
            type: ANNONCE_ERROR,
            payload: err.response.msg

        }))
}

//delete annonce
export const deleteannonce = (id) => dispatch => {
    axios.delete(`/api/annonce/${id}`)
    .then(()=>
    dispatch({
        type: DELETE_TRANS,
        payload: id
    }))
    .catch(err => dispatch({
        type: ANNONCE_ERROR,
        payload: err.response.msg

    }))
    
}

export const saveAnnonce = (annonce) => dispatch => {
    dispatch({
        type: SAVE_MUSIC,
        payload: annonce
    })
}
export const Editannonce = (updatedAnnonce) => dispatch => {
    const config = {
        headers: {
            'Content-type': 'application/json'
        }
    }

    axios.put(`/api/annonce/${updatedAnnonce._id}`,updatedAnnonce,config)
    .then((res)=>{
        dispatch({
                type: UPDATE_TRANS,
                payload: updatedAnnonce

            })
    })
    .catch(err => dispatch({
        type: ANNONCE_ERROR,
        payload: err.response.msg

    }))
    
    
}
export const Clearann = () => dispatch => {
    dispatch({
        type: ClEAR_TRANS,


    })
}
//Reserver
// export const reserver = (updatedAnnReserver) => dispatch => {
//     const config = {
//         headers: {
//             'Content-type': 'application/json'
//         }
//     }

//     axios.put(`/api/annonce/Reserve/${updatedAnnReserver.id}`,updatedAnnReserver,config)
//     .then((res)=>{
//         dispatch({
//                 type: UPDATE_RESERV,
//                 payload: updatedAnnReserver

//             })
//     })
//     .catch(err => dispatch({
//         type: RESERV_ERROR,
//         payload: err.response.msg

//     }))
    
    
// }