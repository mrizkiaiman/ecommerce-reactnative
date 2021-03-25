import axios from '../axios'
import authStorage from '../../auth/storage'

export default async (id, data) => {
  const token = await authStorage.getToken()
  try {
    const response = await axios({
      method: 'patch',
      url: `/addresses?id=${id}`,
      data,
      headers: {token},
    })
    return response.data
  } catch (error) {
    throw error
  }
}
