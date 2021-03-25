import axios from '../axios'

export default async (id) => {
  try {
    const response = await axios({
      method: 'get',
      url: `/products/category?categoryId=${id}`,
    })
    return response.data
  } catch (error) {
    throw error
  }
}
