import React from 'react'
import IconButton from "../IconButton/IconButton";
import '../DisplayNotes/DisplayNotes.css'


export default function DisplayNotes() {
    return (
        <div className='note'>
            <h1> title </h1>
            <p> content</p>
            <IconButton/>
            
        </div>
    )
}
