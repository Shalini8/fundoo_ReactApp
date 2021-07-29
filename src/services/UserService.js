import Axios from './AxiosService'
const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'
const config = {
    headers: {
        'Content-Type': 'application/json',
        'Authorization': localStorage.getItem('token')
    }
};
class UserService {
    Registration = (data) => {
        console.log("registration here");
        return axiosservice.postMethod(`${baseUrl}/user/userSignUp`, data , config)
    }
    Signin = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/login`, data, config)
    }
    ForgetPassword = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/reset`,data, config)
    }
    ResetPassword = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/reset-password`,data,config)
    }
    AddNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/addNotes`, data, config)
    }
    GetNote = () => {
        return axiosservice.getMethod(`${baseUrl}notes/getNotesList`,  config)

    }
    ArchiveNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/archiveNotes`, data, config);
      }
    DeleteNote = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/trashNotes`, data, config);
    }
    ChangeColor = (data) => {
        return axiosservice.postMethod(`${baseUrl}notes/changesColorNotes`,data,config);
      };
    
    
    }
   
   
    


export default UserService;