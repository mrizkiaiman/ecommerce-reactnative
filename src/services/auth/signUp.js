import axios from '../axios'

export default async (firstName, lastName, email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/register',
      data: {
        firstName,
        lastName,
        email,
        password,
      },
    })
    return response.data
  } catch (error) {
    throw error
  }
}
