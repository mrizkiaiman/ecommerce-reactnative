import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
//Components
import Home from '../../screens/Home'
import Market from '../../screens/Market'
import Cart from '../../screens/Cart'
import Orders from '../../screens/Orders'
import Profile from '../../screens/Profile'
//Assets - Inactive
import HomeIcon from '../../assets/icons/BottomTabs/home.svg'
import MarketIcon from '../../assets/icons/BottomTabs/market.svg'
import CartIcon from '../../assets/icons/BottomTabs/cart.svg'
import OrdersIcon from '../../assets/icons/BottomTabs/orders.svg'
import ProfileIcon from '../../assets/icons/BottomTabs/profile.svg'
//Assets - Active
import ActiveHomeIcon from '../../assets/icons/BottomTabs/ActiveIcons/home.svg'
import ActiveMarketIcon from '../../assets/icons/BottomTabs/ActiveIcons/market.svg'
import ActiveCartIcon from '../../assets/icons/BottomTabs/ActiveIcons/cart.svg'
import ActiveOrdersIcon from '../../assets/icons/BottomTabs/ActiveIcons/orders.svg'
import ActiveProfileIcon from '../../assets/icons/BottomTabs/ActiveIcons/profile.svg'

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: '#ffb244',
        inactiveTintColor: '#777777',
        activeBackgroundColor: 'white',
        inactiveBackgroundColor: 'white',
        tabStyle: {
          marginTop: 10,
          marginBottom: 5,
        },
      }}
      initialRouteName="Home">
      <Tab.Screen
        name="Home"
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveHomeIcon /> : <HomeIcon />
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Cart"
        options={{
          tabBarLabel: 'Cart',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveCartIcon /> : <CartIcon />
          },
        }}
        component={Cart}
      />
      <Tab.Screen
        name="Market"
        options={{
          tabBarLabel: 'Market',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveMarketIcon /> : <MarketIcon />
          },
        }}
        component={Market}
      />

      <Tab.Screen
        name="Orders"
        options={{
          tabBarLabel: 'Orders',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveOrdersIcon /> : <OrdersIcon />
          },
        }}
        component={Orders}
      />
      <Tab.Screen
        name="Profile"
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size, focused}) => {
            return focused ? <ActiveProfileIcon /> : <ProfileIcon />
          },
        }}
        component={Profile}
      />
    </Tab.Navigator>
  )
}
