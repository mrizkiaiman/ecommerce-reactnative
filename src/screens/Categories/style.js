import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size

export default StyleSheet.create({
  mainContainer: tailwind('bg-white h-full pt-2'),
  categoryListContainer: tailwind('flex-row flex-wrap justify-between m-4'),
  categoryContainer: {
    //Need responsive handler later
    height: width > 410 ? 165 : 150,
    width: width > 410 ? 165 : 150,
    backgroundColor: '#f2e9dd',
    ...tailwind(
      'light-shadow m-2 bg-opacity-20 rounded-xl mb-4 justify-center items-center',
    ),
  },
  categoryText: tailwind('font-normal font-semibold'),
})
