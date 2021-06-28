import Axios from './AxiosService'
const axiosservice = new Axios();
const baseUrl = 'http://fundoonotes.incubation.bridgelabz.com/api/'
const config = {
    headers: {
        'Content-Type': 'application/json',
        'x-access-token': localStorage.getItem('token')
    }
}
class UserService {
    Registration = (data) => {
        console.log("registration here");
        return axiosservice.postMethod(`${baseUrl}user/userSignUp`, data)
    }
    Signin = (data) => {
        return axiosservice.postMethod(`${baseUrl}/user/login`, data)
    }
    ForgetPassword = (data) => {
        return axiosservice.getMethod(`${baseUrl}/user/reset`)
    }
    ResetPassword = (data) => {
        return axiosservice.getMethod(`${baseUrl}/user/reset-password`)
    }
   
    
}

export default UserService;