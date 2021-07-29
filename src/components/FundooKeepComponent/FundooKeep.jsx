import * as React from "react";
import DashBoard from "../Pages/Dashboard/DashBoard";
import CreateNote from "./CreateNote/CreateNote";
import DisplayNotes from "./DisplayNotes/DisplayNotes";
import UserService from "../../services/UserService";
const service = new UserService();

export class NotesContainer extends React.Component {
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
        let newnote = data.filter(i => (i.isArchived || i.isDeleted) === false)
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
        <CreateNote get={this.getANote} notes={this.state.notes}  />
        <DisplayNotes notes={this.state.notes} 
         get={this.getANote}
        />
      </DashBoard>
    );
  }
}
