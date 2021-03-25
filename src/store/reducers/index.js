import {combineReducers} from 'redux'
import cart from './cart'

import address from './address'
import wishlist from './wishlist'
import users from './users'
import orders from './orders'
import profile from './profile'

export default combineReducers({
  cart,
  address,
  wishlist,
  users,
  orders,
  profile,
})
