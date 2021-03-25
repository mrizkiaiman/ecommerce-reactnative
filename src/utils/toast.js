import Toast from 'react-native-toast-message'

export default (options) => {
  const {title, text, type} = options
  return Toast.show({
    text1: title,
    text2: text,
    position: 'bottom',
    autoHide: true,
    visibilityTime: 400,
    autoHide: Boolean,
    type: type === undefined ? 'success' : type,
  })
}
