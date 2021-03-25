import axios from '../axios'

export default async (email, password) => {
  try {
    const response = await axios({
      method: 'post',
      url: '/login',
      data: {
        email,
        password,
      },
    })
    return {ok: true, data: response.data}
  } catch (error) {
    console.log(error)
    return error
  }
}
