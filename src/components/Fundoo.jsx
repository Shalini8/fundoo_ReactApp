import React, { Component } from 'react'
import TextField from '@material-ui/core/TextField';
import Checkbox from '@material-ui/core/Checkbox';
import Button from '@material-ui/core/Button';
import '../components/Login.css'

export class Fundoo extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <div  className="container">
                
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
                        helperText="you can use use letters, number & periods"
                        variant="outlined"
                    /><br></br><br></br>
                    </div>
                    <Button color="primary" className="gbutton">Use my current email address instead</Button><br></br>
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
                    <Button href="#text-buttons" color="primary">
                        Sign in instead
                    </Button>
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

