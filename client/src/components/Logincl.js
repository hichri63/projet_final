import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login,loadUser} from '../actions/authActions';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons'

import { setAlert, removeAlert } from '../actions/Alertactions';
import { v4 as uuidv4 } from 'uuid';

class Logincl extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }
    
    HandelChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }
    loginNow = () => {
        if (this.state.email === "" || this.state.password === "") {
            let id = uuidv4();
            this.props.setAlert('All fields are required', 'warning', id)
            setTimeout(() => {
                this.props.removeAlert(id)


            }, 5000);
        } else {
            this.props.login({
                email:this.state.email,
                password:this.state.password
            })
            this.props.loadUser()
        }

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        nextProps.auth.user &&  ((nextProps.auth.user.role==="client")&&
         this.props.history.push('/acceuilclient'))

        
        if(nextProps.auth.error==="user already exist"  ||  nextProps.auth.error==="wrong password"){
            let id=uuidv4()
         this.props.setAlert(nextProps.auth.error,'warning',id)
         setTimeout(() => {
            this.props.removeAlert(id)
            this.props.ClearErrors()

        }, 5000);
        }
        
    }
    render() {
        return (
          
            <Form className="login-form">
            <h1 className="font-weight-bold text-center">Login As <br className="text-center" /> Client</h1>
            <FormGroup>
               <Label>Email</Label> 
                <Input  name="email" type="email" onChange={this.HandelChange} placeholder="Email"/>
                </FormGroup>
                <FormGroup>
                <Label>Password</Label> 
                <Input name="password" type="password" onChange={this.HandelChange} placeholder="Password"/>
                </FormGroup>
            <Button onClick={this.loginNow} className="btn-lg btn-dark btn-block">Log in</Button>
            <div className="text-center pt-3">
                Or continue with your social account
            </div>
            <FacebookLoginButton className="mt-3 mb-3" />
        </Form>
            
        );
    }
}
const mapStateToProps=(state)=>{
 return{
    auth:state.auth
 }    
}

export default connect(mapStateToProps, { login, setAlert, removeAlert ,loadUser })(Logincl);