import {StyleSheet} from 'react-native'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  productsContainer: tailwind('px-6 justify-center items-center pt-6'),
  footer: tailwind('flex-row bg-white px-6 py-4 justify-between items-center'),
  checkoutButton: {
    ...Buttons.submitButton,
    width: 180,
  },
  checkoutButtonText: tailwind('font-normal font-semibold text-white'),
  totalText: tailwind('font-normal font-semibold text-lg mb-1'),
  priceTotalText: tailwind('font-normal text-dgray'),
})
