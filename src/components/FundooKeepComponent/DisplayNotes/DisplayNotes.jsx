import React, { Component } from 'react'
import IconButton from "../IconButton/IconButton";
import "../DisplayNotes/DisplayNotes.css";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextareaAutosize,
} from "@material-ui/core";
import { withStyles } from '@material-ui/core/styles';

const styles = {
  underline: {
      "& .MuiInput-underline:before": {
          position: 'fixed'
      },
      "& .MuiInput-underline:after": {
          position: 'fixed'
      }
  }
};

export class DisplayNotes extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
      openStatus: false,
      title:'',
      description:'',
      color:''

    }
  }
  handleClose = () => {
    this.setState({
      openStatus: false,
    });
  }
  handleClickOpen =(val)=>{
    this.setState({
      openStatus: !this.state.openStatus,
      title: val.title,
      description: val.description,
      color:val.color,
      noteID: val.id,
    })
  }
  
  
  render() {
    return (
      <div>
      <div className="note-containerr">
        {this.props.notes.map((val, index) => (
          <div key={index} className="note" style={{ backgroundColor: val.color }} onClick={()=>{this.handleClickOpen(val)}}>
            <h1 className="note-title"> {val.title} </h1>
            <p> {val.description}</p>
            <div className="showicons">
              <IconButton  notestring='update'
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
          style={{ backgroundColor: "none" }}
        >
          <div style={{ backgroundColor: this.state.color, borderRadius: '10px', padding:'10px'}}>
          <h1 className="note-title">{this.state.title}</h1>
          <p>{this.state.description}</p>
          <div className='icon-close'>
            <div className='icon-btn'>
            <IconButton />
            </div>
            <Button  onClick={this.handleClose} >
            Close
          </Button>
          </div>
          </div>
        </Dialog>
      </div>
    );
    
  }
  
}

export default DisplayNotes

  
  
  


