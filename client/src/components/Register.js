import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAlert, removeAlert } from '../actions/Alertactions';
import {register ,ClearErrors} from  '../actions/authActions'
import { v4 as uuidv4 } from 'uuid';
import {Button, Form, FormGroup, Label, Input } from 'reactstrap';

class Register extends Component {
    constructor(props) {
        super(props);
        this.state = {
            firstname: "",
            lastname: "",
            email: "",
            password: "",
            role:""
        }
    }
    HandelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    RegiterNow = () => {
        
        if (this.state.firstname === "" || this.state.lastname === "" || this.state.email === "" || this.state.password === "") {
            let id = uuidv4();
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)
                

            }, 5000);
        }else{
            this.props.register({
                firstname:this.state.firstname,
                lastname:this.state.lastname,
                email:this.state.email,
                password:this.state.password,
                role:this.state.role
            })
        }
    }
    componentWillReceiveProps(nextProps){
        nextProps.auth.user &&  (nextProps.auth.user.role==="client" ?
        this.props.history.push('/acceuilclient'): (this.props.history.push('/')))
        
        if(nextProps.auth.error==="user already exist"){
            let id=uuidv4()
         this.props.setAlert(nextProps.auth.error,'danger',id)
         setTimeout(() => {
            this.props.removeAlert(id)
            this.props.ClearErrors()

        }, 5000);
        }
        
    }
    render() {
        return (
            <Form className="login-form">
            <h1 className="font-weight-bold text-center">Register Page</h1>
            <FormGroup>
                <Label>Firstname</Label>
                <Input    name="firstname" type="text" onChange={this.HandelChange} placeholder="firstname" />
                </FormGroup>
                <FormGroup>
                    <Label>Lastname</Label>
                <Input name="lastname" type="text" onChange={this.HandelChange} placeholder="lastname" />
                </FormGroup>
                <FormGroup>
                    <Label>Email</Label>
                <Input  name="email" type="text" onChange={this.HandelChange} placeholder="email" />
                </FormGroup>
                <FormGroup>
                    <Label>Role</Label>
                <Input name="role" type="text" onChange={this.HandelChange} placeholder="role" />
                </FormGroup>
                <FormGroup>
                    <Label>Password</Label>
                <Input name="password" type="password" onChange={this.HandelChange} placeholder="password" />
                </FormGroup>
            <Button className="btn-lg btn-dark btn-block" onClick={this.RegiterNow}>Register</Button>
        </Form>
        );
    }
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         SetAlert: (msg,type,id) => dispatch(setAlert(msg,type,id)),
//         clearAlert: (id) => dispatch(removeAlert(id)),
//     }
// }
const mapStateToProps=(state)=>{
    return{
        auth:state.auth
    }

}
export default connect(mapStateToProps, {setAlert,removeAlert,register,ClearErrors})(Register);