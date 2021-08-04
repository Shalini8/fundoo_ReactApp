import  React, {Component} from "react";
import CreateNote from "../CreateNote/CreateNote"
import DisplayNotes from "../DisplayNotes/DisplayNotes";
import UserService from "../../../services/UserService";

import { BrowserRouter as Router, Redirect } from "react-router-dom";
import { Route, Switch, useHistory } from "react-router";
import ProtectedRouter from "../ProtectedRoute/ProtectedRoute";

const service = new UserService();

export default class Notes extends Component {
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
        <>
        <CreateNote get={this.getANote} notes={this.state.notes} />
        <ProtectedRouter exact path="/fundooKeep/notes" component={props => <DisplayNotes {...props} notes={this.state.notes} get={this.getANote} />}></ProtectedRouter>
        </>
    );

  }
}
