import * as React from "react";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Grid, TextField } from "@material-ui/core";
import CheckBoxOutlinedIcon from "@material-ui/icons/CheckBoxOutlined";
import BrushIcon from "@material-ui/icons/Brush";
import ImageOutlinedIcon from "@material-ui/icons/ImageOutlined";
import "../CreateNote/CreateNote.css";
import IconButton from "../IconButton/IconButton";
import "../DisplayNotes/DisplayNotes.css";
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  Popper,
  Paper,
  List,
} from "@material-ui/core";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

import UserService from "../../../services/UserService";
const service = new UserService();
let collab;

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      showContent: false,
      color: "#ffffff",
      isArchived: false,
      isDeleted: false,
      openPopper: false,
      collabOpen: false,
      usersList: [],
    };
  }
  changeHandler = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
    console.log(this.state.title);
  };

  handleOnClick = () => {
    if (!this.state.showContent) {
      this.setState({ showContent: true });
    }
  };

  handleOnClose = () => {
    const data = new FormData();
   data.append("title", this.state.title);
    data.append("description", this.state.description);

    if (this.state.color !== "") {
      data.append("color", this.state.color);
    }
    if (this.state.isArchived !== "") {
      data.append("isArchived", this.state.isArchived);
    }
    if (this.state.isDeleted !== "") {
      data.append("isDeleted", this.state.isDeleted);
    }
    if (collab !== "") {
      data.append("collaberators", JSON.stringify([collab]));
    }

    service
      .AddNote(data)
      .then((res) => {
        console.log(res);
        this.props.get();
        this.setState({
          color: "#ffffff",
          showContent: false,
          title: "",
          description: "",
          isArchived: false,
          isDeleted: false,
          image: "",
          collabOpen: false,
          collaborator: "",
          collaborators: [],
          usersList: [],
        });
        collab = null;
      })
      .catch((err) => {
        console.log(err);
      });
  };

  create = (color) => {
    this.setState({
      color: color,
    });
  };
  handleArchive = () => {
    this.setState({
      isArchived: true,
    });
  };
  handleDelete = () => {
    this.setState({
      isDeleted: true,
    });
  };
  collaboratorDialog = () => {
    this.setState({
      collabOpen: true,
    });
  };
  onSave = () => {
    this.setState({
      collabOpen: false,
    });
  };

  onCancel = () => {
    this.setState({
      collabOpen: false,
    });
  };
  addUser = (val) => {
    collab = val;
    this.handleOnClose();
  };

  handleSearchChange = (e) => {
    this.setState({
      openPopper: true,
      anchorEl: e.currentTarget,
    });
    let data = {
      searchWord: e.target.value,
    };
    service
      .SearchUserList(data)
      .then((res) => {
        this.setState({
          usersList: res.data.data.details,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  searchingList = () => {
    const searchList = this.state.usersList.map((val, ind) => {
      return (
        <List key={ind} onClick={() => this.addUser(val)}>
          {val.email}
        </List>
      );
    });
    return searchList;
  };

  render() {
    return (
      <div className="card-container">
        <div
          onClick={this.handleOnClick}
          style={{
            display: this.state.showContent ? "none" : "flex",
            width: "100%",
            justifyContent: "center",
          }}
        >
          <Card className="input-card card-shadow" variant="outlined">
            <CardContent>
              <Grid className="takenote">
                <input
                  className="title"
                  type="text"
                  placeholder="Take a Note"
                ></input>
                <span className="takenote-icons">
                  <CheckBoxOutlinedIcon className="cbi-icon" />
                  <BrushIcon className="cbi-icon" />
                  <ImageOutlinedIcon className="cbi-icon" />
                </span>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div
          style={{
            display: this.state.showContent ? "flex" : "none",
            width: "100%",
            justifyContent: "center",
            backgroundColor: this.props.notes.color,
          }}
          onClick={this.handleOnClick}
        >
          <Card
            className="input-card card-shadow"
            variant="outlined"
            style={{ backgroundColor: this.state.color }}
          >
            <CardContent>
              <TextareaAutosize
                style={{
                  resize: "none",
                  width: "100%",
                  backgroundColor: this.state.color,
                  fontFamily: " Roboto,Arial,sans-serif",
                }}
                className="title"
                name="title"
                value={this.state.title}
                onChange={(e) => this.changeHandler(e)}
                placeholder="Title"
              />
              <TextareaAutosize
                style={{
                  resize: "none",
                  backgroundColor: this.state.color,
                  fontFamily: " Roboto,Arial,sans-serif",
                }}
                className="title2"
                name="description"
                value={this.state.description}
                onChange={(e) => this.changeHandler(e)}
                placeholder="Take a Note"
              />
            </CardContent>
            <div className="icon-close">
              <div className="iconbtn">
                <IconButton
                  noteString="create"
                  color={this.create}
                  // get={this.props.get}
                  note={this.props.notes}
                  addnote={this.state.addEvent}
                  archive={this.handleArchive}
                  delete={this.handleDelete}
                  collab={this.collaboratorDialog}
                />
              </div>
              <Button
                className="action-btn"
                onClick={this.handleOnClose}
                size="small"
              >
                Close
              </Button>
            </div>
          </Card>
        </div>
        {/*,<----------------------------------- collaborator ------------------------------------------> */}
        <Dialog
          className="collab-dialog-box"
          open={this.state.collabOpen}
          fullWidth
          aria-labelledby="responsive-collab-dialog-title"
          style={{ backgroundColor: "none", zIndex: 2 }}
        >
          <DialogTitle>Collaborators</DialogTitle>
          <Divider light />
          <DialogContent>
            <div>
              <div className="first">
                <AccountIcon fontSize="large" className="owner-icon" />
                <div>
                  <div classname="oname">
                    <h3 className="owner-name">Shalini Pandey</h3>
                    <span>(Owner)</span>
                  </div>
                  <p className="owner-tag">shalu8mar@gmail.com</p>
                </div>
              </div>
            </div>

            <div className="second">
              <div className="collab-add-icon">
                <PersonAddIcon />
              </div>
              <input
                type="email"
                className="collab-input"
                placeholder="Person or email to share with"
                onChange={this.handleSearchChange}
              />
            </div>
            <Popper
              open={this.state.openPopper}
              anchorEl={this.state.anchorEl}
              placement="bottom-start"
              transition
              style={{ zIndex: 20, marginTop: "450px", width: "250px" }}
            >
              <Paper
                className="collab-popper"
                style={{ padding: "10px", boxShadow: "1px 1px 5px #888" }}
              >
                {this.searchingList()}
              </Paper>
            </Popper>
          </DialogContent>
          <Divider light />
          <DialogActions
            className="cancelsave-btns"
            style={{ backgroundColor: "#ebebeb", height: "50px" }}
          >
            <div>
              <button className="action-btn" onClick={this.onCancel}>
                Cancel
              </button>
              <button className="action-btn" onClick={this.onSave}>
                Save
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}
