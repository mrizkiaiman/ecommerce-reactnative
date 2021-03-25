import axios from '../axios'
import authStorage from '../../auth/storage'

export default async () => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'get',
      url: '/cart',
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
