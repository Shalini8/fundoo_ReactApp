import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../components/Login.css'
import { InputAdornment } from '@material-ui/core';

export class Fundoo extends Component {
    constructor(props) {
        super(props)

        this.state = {

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
                        <TextField id="outlined-basic1" className="fname" label="First name" variant="outlined" />
                        <TextField id="outlined-basic2" className="lname" label="Last name" variant="outlined" />
                    </div>
                    <div className="email1">
                        <TextField
                            id="outlined-basic3"
                            className="email"
                            label="User name"
                            InputProps={{
                                endAdornment: (
                                    <InputAdornment position="end">@gmail.com</InputAdornment>

                                ),
                            }}
                            helperText="you can use use letters, number & periods"
                            variant="outlined"
                        /><br></br><br></br>
                    </div>
                    <div className="text-link">
                        <a className="mailinstead" href="#outlined-basic3">Use my email address instead</a>

                    </div>
                    <div className="password">
                        <TextField
                            id="outlined-password-input"
                            label="Password"
                            type="password"
                            className="password1"
                            autoComplete="current-password"
                            variant="outlined"
                        />
                        <TextField
                            id="outlined-password-input"
                            label="Confirm"
                            className="confirm"
                            type="password"
                            autoComplete="current-password"
                            variant="outlined"
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
                            <Button variant="contained" className="next" color="primary" href="#contained-buttons">
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


export default Fundoo

