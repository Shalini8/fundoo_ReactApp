import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../Login/Login.css'
import '../Signin/Signin.css'

export class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }


    render() {
        return (
            <div className = "signin-container">
                <div className="fundoo-sign">
                        <span className="letterF">F</span>
                        <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                    </div>
                    <h1 className="heading-sign">Sign in </h1>
                    <h1 className="heading-account"> Use your Fundoo Account </h1>
                    <div className="form">
                    <div className="email1">
                        <TextField
                            id="outlined-basic4"
                            className="email1"
                            label="Email or Phone"
                            variant="outlined"
                        /><br></br><br></br>
                    </div>
                    <div className="forgotemail-link">
                        <a className="forgot-email" href="#outlined-basic4">Forgot email?</a>
                        </div>


                        <div className = "notcomp">
                        <span>Not your computer? Use Guest mode to sign in privately.</span>

                        <div className="text-link">
                        <a className="mailinstead" href="#outlined-basic3">Learn More</a>
                        </div>
                        </div>
                        </div>

                    <div className="lastsec">
                    <div className="signin-link">
                        <a className="signininstead" href="'./components/Signin'">Create account</a>

                    </div>
                        <div className="nextbtn">
                            <Button variant="contained" className="next" color="primary" href="#contained-buttons">
                                Next
                            </Button>
                        </div>
                    </div>
            </div>
        )
    }
}

export default Signin
