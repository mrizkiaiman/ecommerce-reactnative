import {StyleSheet} from 'react-native'
import {Buttons, Colors, Fonts, Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  bannerImage: {
    width: width * 0.875,
    height: 170,
    alignSelf: 'center',
    borderRadius: 10,
    ...tailwind('mt-8 light-shadow'),
  },
  popularItemImage: {
    height: width > 410 ? 165 : 150,
    width: width > 410 ? 165 : 150,
    ...tailwind(
      'light-shadow m-2 bg-opacity-20 rounded-xl mb-4 justify-center items-center',
    ),
  },
  sectionContainer: {
    paddingHorizontal: 25,
  },
  sectionHeaderContainer: tailwind(
    'flex-row items-center justify-between mb-5',
  ),
  sectionContentContainer: tailwind('flex-row'),
  titleSectionText: tailwind('font-semibold text-base'),
  functionalText: tailwind('font-functional'),
})
