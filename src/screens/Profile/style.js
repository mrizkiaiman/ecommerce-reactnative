import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  profileContainer: tailwind('flex-row items-center p-5 mt-2 bg-white'),
  menuListContainer: tailwind('mt-2 bg-white'),
  profilePhoto: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
  profileNameContainer: tailwind('ml-4'),
  nameText: tailwind('font-normal text-xl mb-1 font-semibold'),
  emailText: tailwind('font-normal text-gray'),
})
