import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  carouselContainer: tailwind('justify-center items-center mt-8'),
  banner: {
    height: 350,
    ...tailwind('bg-dgreen px-5'),
  },
  bannerContentContainer: {
    marginTop: 60,
  },
  bannerShonenText: tailwind('font-H2 text-5xl text-white'),
  bannerPlaysText: tailwind('font-H2 text-5xl text-semiYellow'),
  welcomeUserText: tailwind('font-normal text-white mt-3'),
  sectionContainer: {
    marginTop: 175,
    paddingHorizontal: 25,
  },
  sectionHeaderContainer: tailwind(
    'flex-row items-center justify-between mb-5',
  ),
  titleSectionText: tailwind('font-semibold text-base'),
  functionalText: tailwind('font-functional'),
  sectionContentContainer: tailwind('flex-row'),

  voucherImageContainer: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.15,
    shadowRadius: 1.44,
  },
  voucherImage: {
    height: 150,
    width: width * 0.88,
    ...tailwind('mb-1 rounded-xl'),
  },
})
