import {getCart_API} from '../../../services/cart'

export const fetchCart_redux = () => {
  return async (dispatch) => {
    const fetchedCart = await getCart_API()
    dispatch({type: 'UPDATE_STATE_CART', payload: fetchedCart[0]})
  }
}

export const updateCart_redux = (data) => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_CART', payload: data})
  }
}

export const clearCart_redux = () => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_CART', payload: {}})
  }
}
