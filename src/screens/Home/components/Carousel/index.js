import React, {useState} from 'react'
import {StyleSheet, View, ActivityIndicator} from 'react-native'
import Carousel, {Pagination} from 'react-native-snap-carousel'
import {Image} from 'react-native-expo-image-cache'
//Styling
import {tailwind} from '../../../../style/tailwind'
import {Size, Colors} from '../../../../style'
const {width, height} = Size

const styles = StyleSheet.create({
  mainContainer: {
    width,
    ...tailwind('items-center justify-center'),
  },
  image: {
    height: 200,
    width: width * 0.9,
    borderRadius: 4,
  },
  spinner: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    ...tailwind('items-center justify-center'),
  },
})

export default () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const images = [
    // require('../../../../assets/Carousel/carousel-1.png'),
    {
      img:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/v1615286669/shonenplays/carousel/carousel-2_pap7i5.jpg',
      thumbnailImg:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615286669/shonenplays/carousel/carousel-2_pap7i5.jpg',
    },
    {
      img:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/v1615286670/shonenplays/carousel/carousel-3_vjfhuj.jpg',
      thumbnailImg:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615286670/shonenplays/carousel/carousel-3_vjfhuj.jpg',
    },
    {
      img:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/v1615286669/shonenplays/carousel/carousel-4_g9vpzf.jpg',
      thumbnailImg:
        'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615286669/shonenplays/carousel/carousel-4_g9vpzf.jpg',
    },
  ]

  const _renderItem = ({item: {img, thumbnailImg}, index}) => {
    return (
      <Image
        style={styles.image}
        uri={img}
        tint="light"
        preview={{uri: thumbnailImg}}
      />
    )
  }

  return (
    <View style={styles.mainContainer}>
      <Carousel
        data={images}
        renderItem={_renderItem}
        sliderWidth={width * 1.2}
        itemWidth={width * 0.881}
        onSnapToItem={(index) => setActiveSlide(index)}
        autoplay={true}
        layout={'default'}
      />
      <Pagination
        style={{height: 200}}
        dotsLength={images.length}
        activeDotIndex={activeSlide}
        dotStyle={tailwind('w-2 h-2 rounded bg-dgreen')}
      />
    </View>
  )
}
