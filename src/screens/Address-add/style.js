import {StyleSheet} from 'react-native'
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: {},
  sectionContainer: tailwind('bg-white px-5 mt-2 border-0.8 border-gray'),
  sectionTitleText: tailwind('font-normal font-semibold my-6'),
  pinLocationContainer: tailwind(
    'flex-row items-center justify-between bg-white px-5 mt-2 py-3 border-0.8 border-gray',
  ),
  pinLocationText: tailwind('font-normal'),
  saveButton: {
    ...Buttons.submitButton,
    width: width * 0.9,
  },
  saveButtonText: tailwind('font-normal font-semibold text-white'),
  provinceCityListContainer: {
    borderBottomWidth: 1,
    borderColor: '#E2E2E2',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignItems: 'center',
  },
  provinceCityListText: {
    ...tailwind('font-normal'),
    marginVertical: 14,
    marginStart: 16,
  },
})
