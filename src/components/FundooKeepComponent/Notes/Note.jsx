// import React, { Component } from 'react'
// import DisplayNotes from '../DisplayNotes/DisplayNotes'
// import CreateNote from '../CreateNote/CreateNote'
// import UserService from '../../../services/UserService';
// const service = new UserService();


// export class Note extends Component {
//     constructor(props) {
//         super(props)
    
//         this.state = {
//             notes: [],  
//         }
//     }
//     componentDidMount() {
//         this.getANote();
//       }
//       getANote = () => {
//         service
//           .GetNote()
//           .then((res) => {
//             let data = res.data.data.data;
//             let newnote = data.filter(
//               (i) => (i.isArchived || i.isDeleted) === false
//             );
//             this.setState({
//               notes: newnote.reverse(),
//             });
//           })
//           .catch((err) => {
//             console.log(err);
//           });
//       };
//     render() {
//         console.log(notes);
//         return (
//             <div>
//                 <CreateNote get={this.state.getANote} notes={this.state.notes} />
//                 <DisplayNotes notes={this.state.notes} get={this.state.getANote} />
//             </div>
//         )
//     }
// }

// export default Note
