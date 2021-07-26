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
        console.log("registration here");

        return axiosservice.postMethod(`${baseUrl}notes/addNotes`, data, config)
    }
    
   
   
    
}

export default UserService;