import axios from '../axios'

export default async () => {
  try {
    const response = await axios({
      method: 'get',
      url: '/products/bestseller',
    })
    return response.data
  } catch (error) {
    throw error
  }
}
