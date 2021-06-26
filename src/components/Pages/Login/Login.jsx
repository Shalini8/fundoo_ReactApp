import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../Login/Login.css'
import { InputAdornment } from '@material-ui/core';

export class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            fName: '',
            lName: '',
            email: '',
            password: '',
            confirm: '',
            emailError: false,
            passwordError: false,
            confirmError: false,
            fNameError: false,
            lNameError: false
        }
    }
    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    validation = () => {
        let isError = false;
        const error = this.state;
        error.fNameError = this.state.fName === '' ? true : false;
        error.lNameError = this.state.lName === '' ? true : false;
        error.emailError = this.state.email === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        error.confirmError = this.state.confirm === '' ? true : false;

        this.setState({
            ...error
        })

        return isError = error.fNameError || error.lNameError || error.emailError || error.confirmError || error.passwordError;


    }

    Next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("successfull validation ")
        }
    }


    render() {
        return (
            <div className="container">

                <div className="form">
                    <div className="fundoo">
                        <span className="letterF">F</span>
                        <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                    </div>
                    <h1 className="heading">Create your Fundoo Account </h1>

                    <img src="" alt="" />

                    <div className="name" >
                        <TextField name="fName" error={this.state.fNameError} className="fname" label="First name" helperText={this.state.fNameError ? "Enter First name " : ''} variant="outlined" onChange={e => this.changeHandler(e)} />
                        <TextField name="lName" error={this.state.lNameError} className="lname" label="Last name" helperText={this.state.lNameError ? "Enter Last name " : ''} variant="outlined" onChange={e => this.changeHandler(e)} />
                    </div>
                    <div className="email1">
                        <TextField
                            name="email"
                            error={this.state.emailError}
                            className="email"
                            label="User name"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">@gmail.com</InputAdornment>

                                ),
                            }}

                            helperText={this.state.emailError ? "Choose a gmail address " : "you can use use letters, number & periods"}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                        /><br></br><br></br>
                    </div>
                    <div className="text-link">
                        <a className="mailinstead" href="#outlined-basic3">Use my email address instead</a>

                    </div>
                    <div className="password">
                        <TextField
                            name="password"
                            error={this.state.passwordError}
                            id="outlined-password-input"
                            name="password"
                            label="Password"
                            type="password"
                            className="password1"
                            autoComplete="current-password"
                            helperText={this.state.lNameError ? "Enter a password " : ''}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                        />
                        <TextField
                            id="outlined-password-input"
                            error={this.state.confirmError}
                            name="confirm"
                            label="Confirm"
                            className="confirm"
                            type="password"
                            autoComplete="current-password"
                            helperText={this.state.confirmError ? "Enter correct password " : ''}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                        /><br></br>
                    </div>
                    <span className="linepasswrd">Use 8 or more characters with a mix of letters, numbers & symbols</span>

                    <div className="check">
                        <input type="checkbox" name="show password" id="checkpassword" /> Show Password
                    </div>

                    <div className="lastsec">
                        <div className="signin-link">
                            <a className="signininstead" href="'./components/Signin'">Sign in instead</a>

                        </div>
                        <div className="nextbtn">
                            <Button variant="contained" className="next" color="primary" href="#contained-buttons" onClick={this.Next}>
                                Next
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="section2">
                    <img src="https://ssl.gstatic.com/accounts/signup/glif/account.svg" width="244" height="244" alt="Google image" />
                    <span>One account. All of Google<br></br> working for you</span>
                </div>
            </div>
        )
    }
}


export default Login

