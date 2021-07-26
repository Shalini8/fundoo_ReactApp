import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Registration from './components/Pages/Registration/Registration';
import Signin from './components/Pages/Signin/Signin';
import ForgotPassword from './components/Pages/ForgotPassword/ForgotPassword';
import ResetPassword from './components/Pages/ResetPassword/ResetPassword';
import DashBoard from './components/Pages/Dashboard/DashBoard';
import CreateNote from './components/FundooKeepComponent/CreateNote/CreateNote'
import { NotesContainer } from './components/FundooKeepComponent/FundooKeep';

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" component={Registration}></Route>
        <Route exact path="/signin" component={Signin}></Route>
        <Route exact path="/forgotpassword" component={ForgotPassword}></Route>
        <Route path="/resetpassword" component={ResetPassword}></Route>
        <Route exact path="/dashboard" component={DashBoard}></Route>
        <Route exact path="/CreateNote" component={CreateNote}></Route>
        <Route exact path="/fundooKeep" component={NotesContainer}></Route>



      </div>
    </Router>

    
  );
}

export default App;
