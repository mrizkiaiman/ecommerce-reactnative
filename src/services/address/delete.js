import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (id) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'delete',
      url: `/addresses?id=${id}`,
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
