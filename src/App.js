import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Registration from "./components/Pages/Registration/Registration";
import Signin from "./components/Pages/Signin/Signin";
import ForgotPassword from "./components/Pages/ForgotPassword/ForgotPassword";
import ResetPassword from "./components/Pages/ResetPassword/ResetPassword";
import DashBoard from "./components/Pages/Dashboard/DashBoard";
import CreateNote from "./components/FundooKeepComponent/CreateNote/CreateNote";
import { NotesContainer } from "./components/FundooKeepComponent/FundooKeep";
import { Archive } from "./components/FundooKeepComponent/Archive/Archive";
import { Trash } from "./components/FundooKeepComponent/Trash/Trash";
function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/" component={Registration}></Route>
          <Route exact path="/signin" component={Signin}></Route>
          <Route
            exact
            path="/forgotpassword"
            component={ForgotPassword}
          ></Route>
          <Route path="/resetpassword" component={ResetPassword}></Route>
          <Route path="/fundooKeep" component={NotesContainer}/>
          {/* <Route exact path="/notes" component={DisplayNotes}></Route> */}
          {/* <Route exact path="/archive" component={Archive}></Route> */}
          {/* <Route exact path="/trash" component={Trash}></Route> */}
        </Switch>
      </Router>
    </div>
  );
}

export default App;
