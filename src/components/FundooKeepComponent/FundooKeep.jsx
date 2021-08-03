import  React, {Component} from "react";
import DashBoard from "../Pages/Dashboard/DashBoard";
import CreateNote from "./CreateNote/CreateNote";
import DisplayNotes from "./DisplayNotes/DisplayNotes";
import UserService from "../../services/UserService";
import Archive from "./Archive/Archive";
import Trash from "./Trash/Trash";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch, useHistory } from "react-router";
import ProtectedRouter from "./ProtectedRoute/ProtectedRoute";

const service = new UserService();

export class NotesContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      notes: [],
    };
  }

  componentDidMount() {
    this.getANote();
  }

  getANote = () => {
    service
      .GetNote()
      .then((res) => {
        let data = res.data.data.data;
        let newnote = data.filter(
          (i) => (i.isArchived || i.isDeleted) === false
        );
        this.setState({
          notes: newnote.reverse(),
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <DashBoard>
        <CreateNote get={this.getANote} notes={this.state.notes} />
        <ProtectedRouter exact path="/fundooKeep/notes" component={props => <DisplayNotes {...props} notes={this.state.notes} get={this.getANote} />}></ProtectedRouter>
        <ProtectedRouter  path="/fundooKeep/archive" component={Archive}></ProtectedRouter>
        <ProtectedRouter  path="/fundooKeep/trash" component={Trash}></ProtectedRouter>
      </DashBoard> 
    );
  }
}
