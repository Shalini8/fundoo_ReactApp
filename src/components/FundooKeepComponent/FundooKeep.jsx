import * as React from 'react';
import DashBoard from '../Pages/Dashboard/DashBoard';
import CreateNote  from './CreateNote/CreateNote';
import DisplayNotes from './DisplayNotes/DisplayNotes';


export class NotesContainer extends React.Component {
    render() {
        return (
           <DashBoard>
                <CreateNote/>
                <DisplayNotes/>
           </DashBoard>
        );
    }
}
