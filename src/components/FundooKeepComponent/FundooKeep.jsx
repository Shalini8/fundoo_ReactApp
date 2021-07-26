import * as React from 'react';
import DashBoard from '../Pages/Dashboard/DashBoard';
import CreateNote  from './CreateNote/CreateNote';


export class NotesContainer extends React.Component {
    render() {
        return (
           <DashBoard>
                <CreateNote/>
           </DashBoard>
        );
    }
}
