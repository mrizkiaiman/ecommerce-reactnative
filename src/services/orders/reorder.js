import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (checkoutId) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'post',
      url: `/orders/reorder?checkoutId=${checkoutId}`,
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
