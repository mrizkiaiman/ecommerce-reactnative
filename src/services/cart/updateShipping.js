import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (data) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: `/cart/shipping`,
      data,
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
