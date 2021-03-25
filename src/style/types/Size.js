import {Dimensions} from 'react-native'
const {width, height} = Dimensions.get('window')

const responsiveSize = {
  ip7: {
    height: 667,
    width: 375,
  },
  ipx: {
    height: 896,
    width: 414,
  },
}

export default {
  width,
  height,
  responsiveSize,
}
