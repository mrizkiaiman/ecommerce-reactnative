import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (productId, action) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: '/cart/product/qty',
      data: {
        productId,
        action,
      },
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
