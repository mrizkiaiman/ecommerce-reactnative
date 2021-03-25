import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  addNewAddressButton: {
    ...tailwind('w-full flex-row items-center bg-white p-4 mt-4 pl-6'),
    borderBottomWidth: 0.5,
    borderTopWidth: 0.5,
    borderColor: '#E2E2E2',
  },
  addNewAddressButtonText: {
    ...tailwind('font-functional text-dgreen ml-2'),
    marginTop: 2,
    borderBottomWidth: 0.5,
  },
})
