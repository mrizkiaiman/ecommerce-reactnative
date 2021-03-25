import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import moment from 'moment'
//Styling
import {Size} from '../../../../style'
import {tailwind} from '../../../../style/tailwind'
const {width, height} = Size
//Assets
import DotsIcon from '../../../../assets/icons/dots-vertical.svg'
//Components
import {Image} from 'react-native-expo-image-cache'
import {Button} from '../../../../components'
//Functions
import {IDRFormat} from '../../../../utils'

export default ({order}) => {
  return (
    <View style={styles.mainContainer}>
      <View style={styles.headerContainer}>
        <Text style={styles.dateText}>{moment(order.date).format('LL')}</Text>
        <View style={tailwind('flex-row items-center')}>
          <View
            style={
              order.status === 0
                ? {...styles.orderStatusContainer, ...tailwind('bg-gray')}
                : styles.orderStatusContainer
            }>
            {order.status === 0 ? (
              <Text style={styles.orderStatusText}>Unpaid</Text>
            ) : (
              <Text style={styles.orderStatusText}>Completed</Text>
            )}
          </View>
          <DotsIcon />
        </View>
      </View>
      <View style={tailwind('flex-row')}>
        <View>
          <Image
            uri={order.products[0].product.img}
            tint="light"
            preview={{
              uri: order.products[0].product.thumbnailImg
                ? order.products[0].product.thumbnailImg
                : 'https://res.cloudinary.com/dqdhg7qnc/image/upload/c_thumb,w_200,g_face/v1615098170/shonenplays/products/Manga_-_Weekly_Shonen_Jumo_Issue_5_q6enza.png',
            }}
            style={styles.image}
          />
        </View>
        <View>
          <Text numberOfLines={1} style={styles.productNameText}>
            {order.products[0].name}
          </Text>
          <Text style={styles.amountOfItemText}>
            {order.products[0].qty} item
          </Text>
        </View>
      </View>
      {order.products.length > 1 && (
        <Text style={styles.otherItemsText}>
          +{order.products.length - 1} other items
        </Text>
      )}
      <View style={tailwind('flex-row justify-between items-center')}>
        <View>
          <Text style={styles.totalCostText}>Total Cost:</Text>
          <Text style={styles.costNumberText}>Rp{IDRFormat(order.total)}</Text>
        </View>
        <Button
          onSubmit={null}
          styling={{
            buttonStyle:
              order.status === 0
                ? {...styles.bottomRightButton, ...tailwind('bg-dgreen')}
                : styles.bottomRightButton,
            textStyle: styles.bottomRightButtonText,
          }}
          title={order.status === 0 ? 'Pay now' : 'Re-order'}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mainContainer: tailwind('bg-white light-shadow mx-4 rounded-xl mb-4 p-4'),
  image: {
    width: 70,
    height: 90,
    borderRadius: 5,
  },
  headerContainer: {
    ...tailwind('flex-row items-center justify-between mb-5 pb-3'),
    borderBottomWidth: 0.5,
    borderColor: '#E2E2E2',
  },
  dateText: tailwind('font-normal font-semibold text-dgray'),
  orderStatusContainer: tailwind(
    'bg-dgreen p-2 rounded justify-center items-center mr-1',
  ),
  productNameText: {
    ...tailwind('font-normal font-semibold mx-3 mb-2'),
    width: width * 0.6,
  },
  amountOfItemText: tailwind('font-normal text-sm text-dgray ml-3'),
  orderStatusText: tailwind('font-normal font-semibold text-white'),
  otherItemsText: tailwind('font-normal text-dgray text-sm mt-3 mb-2'),
  totalCostText: tailwind('font-normal text-black text-sm mt-2 mb-1'),
  costNumberText: tailwind('font-normal font-semibold'),
  bottomRightButton: tailwind('bg-orange p-3 rounded mr-2'),
  bottomRightButtonText: tailwind('font-normal font-semibold text-white'),
})

// order = {
//   _id,
//   user,
//   date,
//   products,
//   shippingAddress,
//   shippingMethod,
//   total,
//   discount,
// }
