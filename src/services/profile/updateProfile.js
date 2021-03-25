import axios from '../axios'

export default async ({type, uri}, onUploadProgress) => {
  const formProfile = new FormData()
  formProfile.append('file', {type, uri, name: 'photo.jpg'})
  try {
    const response = await axios({
      method: 'post',
      url: '/upload',
      data: formProfile,
      headers: {
        'Content-Type': 'multipart/form-data',
        Accept: 'application/json',
      },
      onUploadProgress: (progress) =>
        onUploadProgress(progress.loaded / progress.total),
    })
    return response.data
  } catch (error) {
    throw error
  }
}
