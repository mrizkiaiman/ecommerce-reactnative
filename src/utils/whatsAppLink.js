import {Linking} from 'react-native'
const url = 'https://wa.me/6282176123417'
export default () => {
  Linking.openURL(url)
    .then((data) => {
      console.log('WhatsApp Opened')
    })
    .catch(() => {
      let phoneNumber = '082176123417'
      if (Platform.OS === 'android') {
        phoneNumber = `tel:${phoneNumber}`
      } else {
        phoneNumber = `telprompt:${phoneNumber}`
      }
      Linking.openURL(phoneNumber)
    })
}
