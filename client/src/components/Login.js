import React, { Component } from 'react';
import { connect } from 'react-redux';
import { login } from '../actions/authActions';
import { setAlert, removeAlert } from '../actions/Alertactions';
import {Button, Form, FormGroup, Label, Input} from 'reactstrap';
import {FacebookLoginButton} from 'react-social-login-buttons'
import { v4 as uuidv4 } from 'uuid';

class Login extends Component {
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
        }

    }
    componentWillReceiveProps(nextProps){
        console.log(nextProps)
        if(nextProps.auth.isAuthenticated){
         this.props.history.push('/')

        }
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
                <h1 className="font-weight-bold text-center">Login As transporter</h1>
                <FormGroup>
                   <Label>Email</Label> <br />
                    <Input  name="email" type="email" onChange={this.HandelChange} placeholder="Email"/>
                    </FormGroup>
                    <FormGroup>
                    <Label>Password</Label> <br />
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

export default connect(mapStateToProps, { login, setAlert, removeAlert })(Login);