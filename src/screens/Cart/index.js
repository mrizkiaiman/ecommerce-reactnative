import React, {useEffect, useState} from 'react'
import {Text, View, ScrollView} from 'react-native'
import {useSelector} from 'react-redux'
//Styling
import styles from './style'
import {tailwind} from '../../style/tailwind'
//Components
import {Product} from './components'
import {Button} from '../../components'
import {EmptyState, TabScreenHeader} from '../../parts'
//Others
import {IDRFormat} from '../../utils'

export default ({navigation}) => {
  const cartFromRedux = useSelector((state) => state.cart.data)
  const navigateToMarket = () => navigation.navigate('Market')
  const navigateToCheckout = () => navigation.navigate('Checkout')

  return (
    <>
      <ScrollView style={styles.mainContainer}>
        <TabScreenHeader
          text={{
            greenText: 'Ca',
            orangeText: 'rt',
          }}
        />
        <View style={styles.productsContainer}>
          {cartFromRedux &&
          cartFromRedux.products &&
          cartFromRedux.products.length > 0 ? (
            cartFromRedux.products.map((item, index) => (
              <Product key={item._id} productData={item} />
            ))
          ) : (
            <View style={tailwind('mt-10')}>
              <EmptyState
                onSubmit={navigateToMarket}
                screen="Cart"
                buttonText="Browse items"
              />
            </View>
          )}
        </View>
      </ScrollView>
      {cartFromRedux &&
        cartFromRedux.products &&
        cartFromRedux.products.length > 0 && (
          <View style={styles.footer}>
            <View>
              <Text style={styles.totalText}>Total</Text>
              <Text style={styles.priceTotalText}>
                Rp{IDRFormat(Number(cartFromRedux.total))}
              </Text>
            </View>
            <Button
              title="Checkout"
              styling={{
                buttonStyle: styles.checkoutButton,
                textStyle: styles.checkoutButtonText,
              }}
              onSubmit={navigateToCheckout}
            />
          </View>
        )}
    </>
  )
}
