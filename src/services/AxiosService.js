import axios from 'axios'


class AxiosService {

postMethod = (url, data,isHeaderRequired) =>{
   return axios.post(url,data,isHeaderRequired)
}
getMethod = (url, data, isHeaderRequired) =>{
  return axios.get(url,data,isHeaderRequired)
}



}

export default AxiosService
