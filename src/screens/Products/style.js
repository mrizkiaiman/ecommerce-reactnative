import {StyleSheet} from 'react-native'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'

const {width, height} = Size
export default StyleSheet.create({
  mainContainer: tailwind('flex-wrap flex-row justify-between m-4'),
})
