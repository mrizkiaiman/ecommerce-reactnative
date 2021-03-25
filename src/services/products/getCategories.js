import axios from '../axios'

export default async () => {
  try {
    const response = await axios({
      method: 'get',
      url: '/categories',
    })
    return response.data
  } catch (error) {
    throw error
  }
}
