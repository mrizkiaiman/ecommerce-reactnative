import {getOrders_API} from '../../../services/orders'

export const fetchOrders_redux = () => {
  return async (dispatch) => {
    const fetchedOrders = await getOrders_API()
    dispatch({type: 'UPDATE_STATE_ORDERS', payload: fetchedOrders})
  }
}

export const updateOrder = () => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let currentOrders = getState().orders.data
    let newCheckout = {...currentCheckout}
    let newOrders = currentOrders
    newCheckout.id_order = `IX-V123-0000${newOrders.length + 1}`
    newOrders.push(newCheckout)

    dispatch({type: 'UPDATE_STATE_ORDERS', payload: newOrders})
  }
}
