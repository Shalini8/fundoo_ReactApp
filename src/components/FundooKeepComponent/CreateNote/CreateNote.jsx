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
import TextareaAutosize from '@material-ui/core/TextareaAutosize';

import UserService from "../../../services/UserService";
const service = new UserService();

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      title: "",
      description: "",
      showContent: false,
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
  addEvent = () => {
    let data = {
      title: this.state.title,
      description: this.state.description,
    };

    service
      .AddNote(data)
      .then((res) => {
        this.props.get();
        console.log(res);
        this.setState({
          showContent: false,
          text: "",
          description: "",
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
  // getANote = ()=>{
  //   service
  //     .GetNote()
  //     .then((res) => {
  //       console.log(res.data.data.data);
        
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  //   }

  render() {
    return (
      <div className="card-container">
        <div 
          onClick={this.handleOnClick}
          style={{ display: this.state.showContent ? "none" : "flex",width:'100%',justifyContent:'center' }}
        >
          <Card className="input-card card-shadow" variant="outlined">
            <CardContent>
              <Grid className = 'takenote'>
                <input
                  className="title"
                  type="text"
                  placeholder="Take a Note"
                ></input>
                <span className="takenote-icons">
                  <CheckBoxOutlinedIcon className="check-icon" />
                  <BrushIcon className="brush-icon" />
                  <ImageOutlinedIcon className="image-icon" />
                </span>
              </Grid>
            </CardContent>
          </Card>
        </div>
        <div
          style={{ display: this.state.showContent ? "flex" : "none" , width: "100%", justifyContent:'center'}}
          onClick={this.handleOnClick}
        >
          <Card className="input-card card-shadow" variant="outlined">
            <CardContent >
              <TextareaAutosize style={{resize:'none',width:'100%'}}
                className="title"
                name="title"
                value={this.state.title}
                onChange={(e) => this.changeHandler(e)}
                placeholder="Title"
              />
              <TextareaAutosize style={{resize:'none'}}
                className="title"
                name="description"
                value={this.state.description}
                onChange={(e) => this.changeHandler(e)}
                placeholder="Take a Note"
              />
            </CardContent>
            <div className="icon-close">
              <div className="iconbtn">
                <IconButton />
              </div>
              <Button onClick={this.addEvent} size="small">
                Close
              </Button>
            </div>
          </Card>
        </div>
      </div>
    );
  }
}
