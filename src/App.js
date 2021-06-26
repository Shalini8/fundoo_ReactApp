import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Login from './components/Pages/Login/Login';
import Signin from './components/Pages/Signin/Signin';

function App() {
  return (
      <Router>
      <div className="App">
      <Route exact path="/" component={Login}></Route>
      <Route exact path="/signin" component={Signin}></Route>
    </div>
    </Router>
    
  );
}

export default App;
