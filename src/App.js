import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './components/Pages/Registration/Registration';
import Signin from './components/Pages/Signin/Signin';
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Pages/ResetPassword/ResetPassword';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route exact path="/resetpassword" component={ResetPassword}></Route>
      </div>
    </Router>

    // <ResetPassword/>
  );
}

export default App;
