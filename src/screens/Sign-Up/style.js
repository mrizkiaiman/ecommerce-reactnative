import {StyleSheet} from 'react-native'
import {Buttons, Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  safeAreaContainer: {
    backgroundColor: 'white',
    height,
  },
  mainContainer: {
    marginHorizontal: width * 0.05,
    marginTop: 50,
  },
  headerTextContainer: tailwind('mb-5'),
  headerTitleContainer: tailwind('flex-row items-center mb-3'),
  headerTitleText: tailwind('font-header-sp'),
  spLogo: tailwind('w-9 h-9 ml-3'),
  headerText: tailwind('font-normal text-lg text-dgray mb-2'),
  inputsContainer: tailwind('mb-6'),
  signInButton: {
    ...Buttons.submitButton,
    ...tailwind('mb-3 rounded-t'),
  },
  signInButtonText: tailwind('font-bold text-white text-base'),
  connectWithGoogleButton: {
    ...Buttons.whiteBorderedSubmitButton,
    ...tailwind('flex-row items-center border-dgray border-0.8 mb-6'),
  },
  connectWithGoogleButtonText: tailwind('font-bold text-dgray ml-4 text-base'),
  navigateToSignUpText: tailwind(
    'font-normal text-dgray text-base text-center',
  ),
  functionalText: tailwind('font-functional'),
})
