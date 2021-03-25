import {StyleSheet} from 'react-native'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  headerInformationContainer: {
    ...tailwind('flex-row justify-between p-4 bg-white'),
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  reorderButton: {
    ...Buttons.submitButton,
    width: width * 0.9,
  },
  reorderButtonText: tailwind('font-normal font-semibold text-white'),
})
