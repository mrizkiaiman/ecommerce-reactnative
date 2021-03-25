import React from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useDispatch} from 'react-redux'
import moment from 'moment'
//Styling
import styles from './style'
import {Size} from '../../style'
import {tailwind} from '../../style/tailwind'
//Assets
//Components
import {Address} from '../../components'
import {Product, OrderSummary} from './components'
import {FooterButton} from '../../parts'
//Functions
import {IDRFormat, Toast} from '../../utils'
import {reOrder} from '../../store/actions/checkout'
import {reOrder_API} from '../../services/orders'
import {updateCart_redux} from '../../store/actions/cart'

export default ({navigation, route}) => {
  const {
    params: {order},
  } = route

  const {
    products,
    shipping_address,
    shipping_method,
    total,
    discount,
    id_order,
    date,
    status,
    _id,
  } = order

  const dispatch = useDispatch()
  const reOrderOnSubmit = async () => {
    if (status === 0)
      Toast({
        title: 'Warning',
        text: 'Midtrans is not ready yet, stay tuned!',
        type: 'error',
      })
    else {
      const {data} = await reOrder_API(_id)
      dispatch(updateCart_redux(data))
      Toast({
        title: 'Success',
        text: 'Items are successfully added to cart',
      })
      navigation.navigate('Cart')
    }
  }

  const headerInformationList = [
    {
      title: 'Status',
      value: status === 0 ? 'Unpaid' : 'Completed',
    },
    {
      title: 'Purchasing Date',
      value: moment(date).format('LL'),
    },
    {
      title: 'Order ID',
      value: id_order ? id_order : `IX-VWXYZ-001`,
    },
  ]

  const HeaderInformation = ({title, value}) => (
    <View style={styles.headerInformationContainer}>
      <Text style={tailwind('font-normal')}>{title}</Text>
      <Text style={tailwind('font-normal font-semibold text-dgray')}>
        {value}
      </Text>
    </View>
  )

  return (
    <>
      <ScrollView>
        <View style={styles.mainContainer}>
          <View style={tailwind('mt-2')}>
            {headerInformationList.map((info, index) => (
              <HeaderInformation key={info.title} {...info} />
            ))}
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Products
            </Text>
            {products.map((product, index) => (
              <Product key={product._id} productData={product} />
            ))}
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Shipping Address
            </Text>
            <Address addressData={shipping_address} />
          </View>
          <View style={tailwind('mt-2 p-4 bg-white')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Shipping Method
            </Text>
            <Text style={tailwind('font-normal font-semibold mb-2')}>
              {shipping_method.name}
            </Text>
            <Text
              style={tailwind('font-normal font-semibold text-dgray text-sm')}>
              Rp{IDRFormat(shipping_method.cost)}
            </Text>
          </View>
          <View style={tailwind('mt-2 p-4 bg-white mb-8')}>
            <Text style={tailwind('font-normal font-semibold mb-6')}>
              Order Summary
            </Text>
            <OrderSummary
              costData={{
                shipping: shipping_method.cost,
                total,
                discount,
              }}
            />
          </View>
        </View>
      </ScrollView>
      <FooterButton
        styling={{
          buttonStyle: styles.reorderButton,
          textStyle: styles.reorderButtonText,
        }}
        title={status === 0 ? 'Pay now' : 'Re-Order'}
        onSubmit={reOrderOnSubmit}
      />
    </>
  )
}
