import React, { Component } from 'react';
import { connect } from 'react-redux';
import {allannonce} from '../actions/transaction'
import Card from 'react-bootstrap/Card'
import {Link} from 'react-router-dom'

class Description extends Component {
    constructor(props){
        super(props)
        this.state={
        
        }}
        componentDidMount() {
          
          
            this.setState(this.props.annonces.annonce.filter(el=>
                el.villedep=== this.props.match.params.name)[0])
        }

// componentWillMount=()=>{
    
   
//             // console.log(this.props.match.params.name)
//             // this.setState({ann:this.props.annonces.annonce.filter(el=>
//             //     el.villedep=== this.props.match.params.name)[0]})
    
// }


    render() {
        return (
            <div>
                <h1> More information </h1>
              <h4>Date départ: {this.state.Datedep}</h4>
              <h4>Ville depart: {this.state.villedep}</h4>
              <h4>Ville arrivée: {this.state.villearr}</h4>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        annonces: state.annonce
    }

}



export default connect(mapStateToProps) (Description);