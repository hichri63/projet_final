import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Getreservation } from '../actions/reserv';
import { loadUser } from '../actions/authActions';
import { Table } from 'react-bootstrap';

class Reservation extends Component {
    componentDidMount() {
        this.props.Getreservation()
        this.props.loadUser()
    }
    render() {
        return (
            <div>
                 <div>
                <h1>Mes Réservation</h1>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Email</th>
                            <th>Colis</th>
                            <th>Poid colis</th>
                            <th>Etat</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reservation.reservation.map(el =>

                            (el.id_cl === this.props.auth.user._id &&
                                <tr>
                                    <td>{el.email}</td>
                                    <td>{el.colis}</td>
                                    <td>{el.poid}</td>
                                    <td className={el.etat==="En attente" ?"couleuratt" : el.etat==="accepter" ? "couleuracc" :"cc" } >{el.etat}</td>
                                </tr>
                            )
                        )}

                    </tbody>
                </Table>

            </div>

            </div>
        );
    }
}
const mapStateToProps = (state) => {
    return {
        reservation: state.reserv,
        auth:state.auth
    }
}

export default connect(mapStateToProps, { Getreservation, loadUser })(Reservation);