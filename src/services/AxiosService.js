import axios from 'axios'


class AxiosService {

postMethod = (url, data) =>{
   return axios.post(url,data)
}
// getMethod = (url, data, isHeaderRequired) =>{
//   return axios.get(url,data,isHeaderRequired)
// }
getMethod = (url) =>{
  return axios.get(url)
}


}

export default AxiosService
