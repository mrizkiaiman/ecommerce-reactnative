import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
//Styling
import {Size, Buttons} from '../../style'
import {tailwind} from '../../style/tailwind'
const {width, height} = Size
//Assets
import {
  EmptyStateAddress,
  EmptyStateCart,
  EmptyStateOrders,
  EmptyStateProducts,
  EmptyStateWishlist,
} from '../../assets/illustrations/EmptyState'
//Components
import {Button} from '../../components'
//Functions

export default ({screen, onSubmit, buttonText, size}) => {
  const styles = StyleSheet.create({
    mainContainer: tailwind('justify-center items-center my-3'),
    button: {
      ...Buttons.submitButton,
      width: size === 'sm' ? 170 : 220,
      marginTop: 15,
      height: size === 'sm' ? 40 : 48,
    },
    buttonText:
      size === 'sm'
        ? tailwind('font-normal font-semibold text-white')
        : tailwind('font-normal font-semibold text-lg text-white'),
    textContainer:
      size === 'sm'
        ? tailwind('justify-center items-center my-1')
        : tailwind('justify-center items-center my-2'),
    titleText:
      size === 'sm'
        ? tailwind('font-normal font-semibold text-lg')
        : tailwind('font-normal font-semibold text-2xl'),
    subTitleText: {
      ...tailwind('font-normal text-sm text-dgray text-center'),
      width: width * 0.8,
    },
  })

  return (
    <View style={styles.mainContainer}>
      {screen == 'Cart' ? (
        <EmptyStateCart width={200} height={200} />
      ) : screen == 'Orders' ? (
        <EmptyStateOrders width={224} height={224} />
      ) : screen == 'Products' ? (
        <EmptyStateProducts width={240} height={240} />
      ) : screen == 'Wishlist' ? (
        <EmptyStateWishlist width={240} height={240} />
      ) : (
        <EmptyStateAddress
          style={tailwind('mb-8')}
          width={size === 'sm' ? 110 : 180}
          height={size === 'sm' ? 110 : 180}
        />
      )}
      {screen == 'Cart' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No item yet</Text>
          <Text style={styles.subTitleText}>
            You can browse item easily in market section
          </Text>
        </View>
      ) : screen == 'Orders' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No order yet</Text>
          <Text style={styles.subTitleText}>
            Looks like you haven’t made any order yet
          </Text>
        </View>
      ) : screen == 'Products' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No product found</Text>
          <Text style={styles.subTitleText}>
            You can browse item easily in market section
          </Text>
        </View>
      ) : screen == 'Wishlist' ? (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No wishlist found</Text>
          <Text style={styles.subTitleText}>
            You can browse item easily and save what you want to buy later!
          </Text>
        </View>
      ) : (
        <View style={styles.textContainer}>
          <Text style={styles.titleText}>No shipping address yet</Text>
          <Text style={styles.subTitleText}>
            Looks like you haven’t added shipping address yet
          </Text>
        </View>
      )}
      <Button
        styling={{
          buttonStyle: styles.button,
          textStyle: styles.buttonText,
        }}
        onSubmit={onSubmit}
        title={buttonText}
      />
    </View>
  )
}
