import axios from 'axios'

const local = 'http://192.168.0.110:3001'
const deployed = 'https://shonenplaysmobile-api.herokuapp.com'

const instance = axios.create({
  baseURL: deployed,
})

// const get = instance.get
// instance.get = async (url, params, axiosConfig) => {
//   const response = await get(url, params, axiosConfig)

//   try {
//     if (response) {
//       Cache.store(url, response.data)
//       return response
//     }
//   } catch (error) {
//     console.log(error)
//   }

//   const data = await Cache.get('url')
//   return data ? {ok: true, data} : response
// }

export default instance
