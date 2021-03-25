import {StyleSheet} from 'react-native'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  mainContentContainer: tailwind('bg-white px-5'),
  productImage: {
    resizeMode: 'contain',
    height: 280,
    width: 280,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 10,
  },
  productNameText: tailwind('font-normal font-bold text-xl pb-2'),
  priceText: tailwind('font-normal font-semibold text-dgray pb-8'),
  descriptionText: tailwind('font-normal text-dgray text-sm pb-10'),
  relatedProductsContainer: tailwind('px-5 py-5 pb-10'),
  relatedProductText: tailwind('font-normal font-bold text-lg pb-2'),
  qtyControlContainer: tailwind('self-center pb-10'),
  addToCart_APIButton: {
    ...Buttons.submitButton,
    width: width * 0.9,
  },
  addToCart_APIButtonText: tailwind('font-normal font-semibold text-white'),
})
