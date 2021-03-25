import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  sectionContainer: {
    marginTop: 35,
    paddingHorizontal: 25,
  },
  sectionHeaderContainer: tailwind(
    'flex-row items-center justify-between mb-4',
  ),
  titleSectionText: tailwind('font-semibold text-base'),
  functionalText: tailwind('font-functional'),
  popularKeywordText: tailwind('font-normal text-dgray mb-4'),
})
