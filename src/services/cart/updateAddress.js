import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (addressId) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: `/cart/address?addressId=${addressId}`,
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
