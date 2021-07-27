import React from 'react'
import IconButton from "../IconButton/IconButton";
import '../DisplayNotes/DisplayNotes.css'
import AllNotes from '../AllNotes/AllNotes';


export default function DisplayNotes(props) {
    return (
        <div className='note-containerr'>
            {props.notes.map((val,index) =>(
            <div  key={index} className='note'>
            <h1 className='note-title'> {val.title} </h1>
            <p> {val.description}</p>
            <div className='showicons'>
            <IconButton />
            </div>
            </div>
         
            ))}
        
        </div> //inside map 
    )
}
