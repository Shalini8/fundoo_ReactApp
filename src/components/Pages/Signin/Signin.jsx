import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../Registration/Registration.css'
import '../Signin/Signin.css'
import { Link } from "react-router-dom";

export class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            username:'',
            password:'',
            passwordError:false,
            usernameError: false

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
        error.usernameError = this.state.username === '' ? true : false;
        error.passwordError = this.state.password === '' ? true : false;
        this.setState({
            ...error
        })

        return isError = error.usernameError || error.passwordError;
    }
    Next = () => {
        var validated = this.validation();
        if (validated) {
            console.log("successfull validation ")
        }

    }



    render() {
        return (
            <div className ="first-container">
            <div className = "signin-container">
                <div className="fundoo fundoo-sign">
                        <span className="letterF">F</span>
                        <span className="letteru">u</span><span className="lettern">n</span><span className="letterd">d</span><span className="letterO">o</span><span className="lettero">o</span>
                    </div>
                    <h1 className="heading-sign">Sign in </h1>
                    <h1 className="heading-account"> Use your Fundoo Account </h1>
                    <div className="form">
                    <div className="email1">
                        <TextField
                            name="username"
                            error={this.state.usernameError}
                            // fullWidth = {true} 
                            // style={{ width: '99%' }}
                            id="outlined-basic4"
                            className="email1"
                            label="Email or Phone"
                            helperText={this.state.usernameError ? "Enter an email or phone number " : ''}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                        /><br></br><br></br>
                    </div>
                    <div className="forgotemail-link">
                        <a className="forgot-email" href="#outlined-basic4">Forgot email?</a>
                        </div>
                        <div className="email1">
                        <TextField
                            name="password"
                            error={this.state.usernameError}
                            id="outlined-basic5"
                            size='large'
                            // fullWidth ={true}
                            // style={{ width: '99%' }}
                            className="email1"
                            label="Password"
                            helperText={this.state.usernameError ? "Enter a valid password " : ''}
                            variant="outlined"
                            onChange={e => this.changeHandler(e)}
                        /><br></br><br></br>
                    </div>
                    <div className="forgotemail-link">
                        <Link className="forgot-email" to="/forgotpassword">Forgot password?</Link>
                        </div>



                        <div className = "notcomp">
                        <span>Not your computer? Use Guest mode to sign in privately.</span>

                        <div className="text-link">
                        <a className="mailinstead" href="https://support.google.com/chrome/answer/6130773?hl=en">Learn More</a>
                        </div>
                        </div>
                        </div>

                    <div className="lastsec">
                    <div className="signin-link">
                        <Link className="signininstead" to="/">Create account</Link>

                    </div>
                        <div className="nextbtn">
                            <Button variant="contained" className="next" color="primary" href="#contained-buttons"onClick={this.Next}>
                                Next
                            </Button>
                        </div>
                    </div>
            </div>
            </div>
        )
    }
}

export default Signin

