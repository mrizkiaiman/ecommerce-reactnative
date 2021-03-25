import {StyleSheet} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../src/style'
const {width, height} = Size

export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
    height: height,
    justifyContent: 'space-between',
  },
  headerTextContainer: {
    marginHorizontal: 20,
    marginTop: 35,
  },
  headerTitleText: {
    fontFamily: 'Oxanium_600SemiBold',
    fontSize: 45,
    marginBottom: 20,
    color: Colors.gray,
  },
  headerText: {
    ...Fonts.regularBlack,
    color: Colors.gray,
    marginBottom: 8,
  },
  getStartedButton: {
    ...Buttons.submitButton,
    width: width * 0.45,
    alignSelf: 'flex-start',
    backgroundColor: Colors.deeperGreen,
    marginTop: 20,
  },
  getStartedButtonText: {
    ...Buttons.submitButtonText,
    fontFamily: 'Oxanium_700Bold',
  },
})

// export default StyleSheet.create({
//   safeAreaContainer: {
//     backgroundColor: Colors.green,
//     height: height,
//     justifyContent: 'space-between',
//   },
//   headerTextContainer: {
//     marginHorizontal: 20,
//     marginTop: 35,
//   },
//   headerTitleText: {
//     fontFamily: 'Oxanium_600SemiBold',
//     fontSize: 45,
//     marginBottom: 20,
//     color: Colors.semiYellow,
//   },
//   headerText: {
//     ...Fonts.regularBlack,
//     color: 'white',
//     marginBottom: 8,
//   },
//   getStartedButton: {
//     ...Buttons.submitButton,
//     width: width * 0.45,
//     alignSelf: 'flex-start',
//     backgroundColor: Colors.orange,
//     marginTop: 20,
//   },
//   getStartedButtonText: {
//     ...Buttons.submitButtonText,
//     fontFamily: 'Oxanium_700Bold',
//   },
// })
