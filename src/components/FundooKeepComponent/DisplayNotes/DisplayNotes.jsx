import React from "react";
import IconButton from "../IconButton/IconButton";
import "../DisplayNotes/DisplayNotes.css";

export default function DisplayNotes(props) {
  return (
    <div className="note-containerr">
      {props.notes.map((val, index) => (
        <div key={index} className="note" style={{ backgroundColor: val.color }}>
          <h1 className="note-title"> {val.title} </h1>
          <p> {val.description}</p>
          <div className="showicons">
            <IconButton  notestring='update'
            note={val}
            get={props.get}
            />
          </div>       
        </div>
      ))}
    </div>
  );
}
