import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import { InputAdornment } from '@material-ui/core';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import IconButton from '@material-ui/core/IconButton';
import '../Registration/Registration.css'
import '../Signin/Signin.css'
import '../ResetPassword/ResetPassword.css'
// import { Link } from "react-router-dom";


export class ResetPassword extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
            password: '',
            confirm: '',
            passwordError: false,
            confirmError: false,
            showPassword: false,
            showPassword1: false
             
        }
    }
    handleClickShowPassword () {
        try {
            this.setState(state => ({ showPassword: !state.showPassword }));
        } catch (err) {
            console.log("error at handleClickShowPassword in resetPassword");
        }
    };
    handleClickShowPassword1 () {
        try {
            this.setState(state => ({ showPassword1: !state.showPassword1 }));
        } catch (err) {
            console.log("error at handleClickShowPassword1 in resetPassword");
        }
    };
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }
    validation = () => {
        let isError = false;
        const error = this.state;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmError = this.state.confirm === '' ? true : false;
        this.setState({
            ...error
        })

        return isError = error.passwordError || error.confirmError;
    }
    Reset = () => {
        var validated = this.validation();
        if (validated) {
            console.log("successfull validation ")
        }
    }

    
    render() {
        return (
            <div className ="first-container">
                <div  className = "resetpassword-container">
                 <div className="fundoo fundoo-sign">
                        <span className="letterF">F</span>
                        <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                    </div>
                    <h1 className="heading-sign">Reset Password </h1>
                    <h1 className="heading-account"> Create a new Password </h1>
                    <div className="email1">
                        <TextField
                            name="password"
                            type={this.state.showPassword ? 'text' : 'password'}
                            error={this.state.passwordError}
                            fullWidth ="true"
                            id="outlined-basic4"
                            className="email1"
                            label="Password"
                            helperText={this.state.passwordError ? "Please enter password " : ''}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                            value={this.state.password}
                            // onKeyPress={this.handleEnter}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword}
                                        >
                                            {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        /><br></br><br></br>
                    </div>
                    <div className="email1">
                        <TextField
                            name="confirm"
                            type={this.state.showPassword1 ? 'text' : 'password'}
                            error={this.state.confirmError}
                            fullWidth ="true"
                            id="outlined-basic4"
                            className="email1"
                            label="Confirm"
                            helperText={this.state.confirmError ? "Enter correct confirm password  " : ''}
                            variant="outlined"
                            value={this.state.confirm}
                            // onKeyPress={this.handleEnter}
                            onChange={e => this.changeHandler(e)}
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">
                                        <IconButton
                                            aria-label="Toggle password visibility"
                                            onClick={this.handleClickShowPassword1}
                                        >
                                            {this.state.showPassword1 ? <Visibility /> : <VisibilityOff />}
                                        </IconButton>
                                    </InputAdornment>
                                ),
                            }}
                        /><br></br><br></br>
                        
                    </div>
                    <div className="Resetbtn">
                            <Button variant="contained" className="next" color="primary" onClick={this.Reset}>
                                Reset
                            </Button>
                        </div>
            </div>
            </div>
        )
    }
}

export default ResetPassword
