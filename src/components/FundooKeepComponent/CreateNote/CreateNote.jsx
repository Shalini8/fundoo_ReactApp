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

export default class CreateNote extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <div className="card-container">
        <Card className="input-card card-shadow" variant="outlined">
          <CardContent>
            <Grid>
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
        {/* <div>
        <Card className="input-card card-shadow" variant="outlined">
        <CardContent>

         <textarea className="title" placeholder='Title' ></textarea> <br></br>
         <textarea className="title" placeholder='Take a Note' ></textarea> 

          </CardContent>
          <div className ="icon-close">
            <div className='iconbtn'>
          <IconButton /> 
          </div>    
          <Button size="small">Close</Button>
          </div>
         </Card>

        </div> */}
      </div>
      
    );
  }
}
