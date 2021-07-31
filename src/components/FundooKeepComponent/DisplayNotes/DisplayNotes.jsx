import React, { Component } from "react";
import IconButton from "../IconButton/IconButton";
import "../DisplayNotes/DisplayNotes.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Divider,
  TextareaAutosize,
  Popper,
  Paper,
} from "@material-ui/core";
import AccountIcon from "@material-ui/icons/AccountCircleOutlined";
import PersonAddIcon from "@material-ui/icons/PersonAddOutlined";
import UserService from "../../../services/UserService";
const service = new UserService();


export class DisplayNotes extends Component {
  constructor(props) {
    super(props);

    this.state = {
      collaboratorOpen: false,
      openStatus: false,
      id: "",
     title: "",
      description: "",
      color: "",
    };
  }
 
  handleClickOpen = (val) => {
    this.setState({
      openStatus: !this.state.openStatus,
      title: val.title,
      description: val.description,
      id: val.id,
      color: val.color,
      noteID: val.id,
    });
  };
  handleTitleChange = (e) => {
    this.setState({
      title: e.target.value,
    });
  };

  handleDescriptionChange = (e) => {
    this.setState({
      description: e.target.value,
    });
  };
  handleClose = () => {
    let data ={
      noteId:this.state.id,
      title:this.state.title,
      description:this.state.description
    }
    service
      .UpdateNotes(data)
      .then((res) => {
        console.log(res);
        this.props.get();
        this.handleCancel();
      })
      .catch((err) => {
        console.log(err);
      });
  };
    handleCancel=()=>{
      this.setState({
        collaboratorOpen:false,
        openStatus: false,
      });
    }
  // handleCollab = () => {
  //   if (this.props.noteString === "create") {
  //     console.log("createnote")
  //     this.props.collaborator();
  //   } else  {
  //     console.log("herecollab")
  //     this.handleCollaborator();
  //   }
  // };
  handleCollaborator = () => {
    if (this.props.noteString === "create") {
          console.log("createnote")
           this.props.collaborator();
    }else{
    this.setState({
      collaboratorOpen: true,
    });
  }
  };
  

  render() {
    return (
      <div>
        <div className="note-containerr">
          {this.props.notes.map((val, index) => (
            <div
              key={index}
              className="note"
              style={{ backgroundColor: val.color }}
            >
              <h1
                className="note-title"
                onClick={() => {
                  this.handleClickOpen(val);
                }}
              >
                {val.title}
              </h1>
              <p> {val.description}</p>
              <div className="showicons">
                <IconButton
                  collaboratorOpen={this.handleCollaborator}
                  collabOpen={this.state.collaboratorOpen}
                  notestring="update"
                  note={val}
                  get={this.props.get}
                />
              </div>
            </div>
          ))}
        </div>
        <Dialog
          className="dialog-box"
          open={this.state.openStatus}
          fullWidth
          aria-labelledby="responsive-dialog-title"
          id="responsive-dialog-title"
          style={{ backgroundColor: "none", 
          zIndex: 2
        }}
        >
          <div
            style={{
              backgroundColor: this.state.color,
              borderRadius: "5px",
              padding: "10px",
            }}
          >
           < TextareaAutosize style={{resize:'none',backgroundColor: this.state.color,
           border: 'none',fontSize:'20px',fontFamily:' Roboto,Arial,sans-serif',}}
              name="title"
              className="dianote-title"
              defaultValue={this.state.title}
              onChange={this.handleTitleChange}
            /><br></br>
            <TextareaAutosize style={{resize:'none',backgroundColor: this.state.color, border: 'none',fontSize:'20px',fontFamily:' Roboto,Arial,sans-serif'}}
                name="description"
                className="dianote-desc"
                defaultValue={this.state.description}
                onChange={this.handleDescriptionChange}
              />
            <div className="icon-close">
              <div className="icon-btn">
                <IconButton 
                  // note={val}
                   get={this.props.get}
                />
              </div>
              <Button onClick={this.handleClose}>Close</Button>
            </div>
          </div>
        </Dialog>
        {/*,<----------------------------------- collaborator ------------------------------------------> */}
        <Dialog
          className="dialog-box"
          open={this.state.collaboratorOpen}
          fullWidth
          aria-labelledby="responsive-collab-dialog-title"
          style={{ backgroundColor: "none"}}
        >
          <DialogTitle >
            Collaborators
          </DialogTitle>
          <Divider light />
          <DialogContent>
            <div>
              <div className="partfirst">
                <AccountIcon fontSize="large" className="owner-icon" />
                <div>
                  <div classname='oname'> 
                    <h3 className="owner-name">Shalini Pandey</h3>
                    <span>(Owner)</span>
                  </div>
                  <p className="owner-tag">shalu8mar@gmail.com</p>
                </div>
              </div>
            </div>
           
            <div className="partsecond">
              <div className="collab-add-icon">
                <PersonAddIcon />
              </div>
              <input
                type="email"
                className="collab-input"
                placeholder="Person or email to share with"
              />
            </div>
          </DialogContent>
          <Divider light />
          <DialogActions className="cancelsave-btns" style={{backgroundColor:'#ebebeb',height:'50px'}}>
            <div >
              <button className="action-btn" onClick={this.handleCancel}>
                Cancel
              </button>
              <button className="action-btn" onClick={this.handleSave}>
                Save
              </button>
            </div>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

export default DisplayNotes;
