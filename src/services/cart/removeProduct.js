import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (productId) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: '/cart/remove',
      params: {
        productId,
      },
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
