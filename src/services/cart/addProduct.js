import axios from '../axios'
import authStorage from '../../auth/storage'

export default async ({productId, qty, price}) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: '/cart/add',
      data: {
        productId,
        qty,
        price,
      },
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
