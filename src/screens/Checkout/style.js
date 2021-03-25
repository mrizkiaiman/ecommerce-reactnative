import {StyleSheet} from 'react-native'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  sectionContainer: {
    marginTop: 175,
    paddingHorizontal: 25,
    backgroundColor: 'white',
    marginTop: 8,
    paddingVertical: 16,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
  },
  sectionHeaderContainer: tailwind(
    'flex-row items-center justify-between mb-5',
  ),
  titleSectionText: tailwind('font-semibold text-base'),
  functionalText: tailwind('font-functional'),
  changeShippingMethodButton: {
    ...Buttons.whiteBorderedSubmitButton,
    ...tailwind('flex-row justify-between p-3 border-orange'),
    height: 55,
  },
  changeShippingMethodButtonText: tailwind(
    'font-normal font-semibold text-dgray',
  ),
})
