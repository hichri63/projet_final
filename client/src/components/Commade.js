import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Getreservation } from '../actions/reserv';
import { allannonce } from '../actions/transaction'
import { loadUser } from '../actions/authActions';
import { Table } from 'react-bootstrap';
import {updatereser} from '../actions/reserv';


class Commande extends Component {

    componentDidMount() {
        this.props.Getreservation()
        this.props.loadUser()
        this.props.allannonce()
    }

   
    render() {
        return (
            <div>
                <h1>Mes Commande</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Annonce</th>
                            <th>Email</th>
                            <th>Colis</th>
                            <th>Poid colis</th>
                            <th>Etat</th>
                            
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reserv.reservation.map(el =>

                            (el.id_trans === this.props.auth.user._id &&
                                <tr>
                                    <td>{this.props.annonce.annonce.filter(ann => (

                                 ann._id === el.id_ann

                                    ))[0].Datedep }</td>
                                           
                                    <td>{el.email}</td>
                                    <td>{el.colis}</td>
                                    <td >{el.poid}</td>
                                    <td className={el.etat === "En attente" ? "couleuratt": el.etat === "accepter"  ? "couleuracc" :"couleurref"}  >{el.etat==="En attente"  ? 
                                    <div><h6>{el.etat}</h6> 
                                    <button onClick={()=>this.props.updatereser(el)}  >Accepter</button>
                                    </div> : el.etat
                                    }</td>
                                    
                                </tr>
                            )
                        )}

                    </tbody>
                </Table>

            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        reserv: state.reserv,
        auth: state.auth,
        annonce: state.annonce
    }
}


export default connect(mapStateToProps, { Getreservation, allannonce, loadUser,updatereser })(Commande);