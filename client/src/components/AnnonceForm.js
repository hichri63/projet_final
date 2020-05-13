import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { v4 as uuidv4 } from 'uuid';
import { addannonce, Editannonce,Clearann } from '../actions/transaction';
import { Form, FormGroup,Label,Input,Button } from 'reactstrap';

class AnnonceForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Datedep: "",
            villedep: "",
            villearr: "",
            imagevoiture: ""

        }
    }
    handelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    componentWillReceiveProps(nextprops) {
        // console.log(nextprops.save)
        this.setState(nextprops.save)
    }

    render() {
        return (
            <Form className="login-form">
                <FormGroup>
                
                    <Label>Date départ :</Label>
                    <Input onChange={this.handelChange} name="Datedep" type="text" value={this.state.Datedep} />
                </FormGroup>
                <FormGroup> 
                       <Label>Ville départ :</Label>
                    <Input   onChange={this.handelChange} name="villedep" type="text" value={this.state.villedep} />
                </FormGroup>
                
                <FormGroup>
                    <Label>Ville arrivée :</Label>
                    <Input  onChange={this.handelChange} name="villearr" type="text" value={this.state.villearr} />
                </FormGroup>
                <FormGroup>
                    <Label>Image:</Label>
                    <Input onChange={this.handelChange} name="imagevoiture" type="text" value={this.state.imagevoiture} />
                </FormGroup>
                <Button  onClick={(e) => {
                    e.preventDefault()
                    if (this.props.save) {
                        this.props.Editannonce(this.state)
                        this.props.Clearann()
                    } else {
                        this.props.addannonce(this.state)
                        console.log(this.state)
                       
                    }
                    this.setState({
                        Datedep: "",
                        villedep: "",
                        villearr: "",
                        imagevoiture: ""
                    })
                }}>{this.props.save ? "Edit" : "Add"}</Button>

            </Form>
        );
    }
}
// const mapDispatchToProps = (dispatch) => {
//     return {
       
//         editannonce: (updateannonce) => dispatch(Editannonce(updateannonce)),
//         Clearsave:()=>dispatch(Clearann())
//     }
// }
const mapStateToProps = (state) => {
    return {
        save: state.annonce.saved
    }
}

export default connect(mapStateToProps,{addannonce,Editannonce,Clearann})(AnnonceForm);