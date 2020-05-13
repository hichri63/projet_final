import React from 'react';
import { connect } from 'react-redux';
import { deleteannonce,saveAnnonce } from '../actions/transaction';
import { Card, CardImg, Button,CardTitle, ButtonGroup} from 'reactstrap';


const AnnonceItem = (props) => {
    return (
        <div>
              <Card>
                <CardImg src={props.annonce.imagevoiture} alt="..." />
                <CardTitle className="text-center"><strong>Datedep:</strong>{props.annonce.Datedep}</CardTitle>
                <CardTitle className="text-center"><strong>Depart:</strong>{props.annonce.villedep}</CardTitle>
                <CardTitle className="text-center"><strong>Destination:</strong>{props.annonce.villearr}</CardTitle>
                <ButtonGroup>
                <Button color="info" onClick={()=>{
                    props.saveAnnonce(props.annonce)
                }} >Edit</Button>
                <Button color="danger" onClick={() => {
                   props.deleteannonce(props.annonce._id)
                }} >Delete</Button>
                
                </ButtonGroup>
            </Card>

        </div>
    );
};

// const mapDispatchToprops = (dispacth) => {
//     return {
//         delete: (id) => dispacth(deleteannonce(id)),
//         save:(newann)=> dispacth(saveAnnonce(newann))
//     }
// }
export default connect(null,{saveAnnonce,deleteannonce})(AnnonceItem);