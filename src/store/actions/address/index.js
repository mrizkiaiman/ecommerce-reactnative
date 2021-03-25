import {getAddress_API} from '../../../services/address'

export const fetchAddress_redux = () => {
  return async (dispatch) => {
    const fetchedAddress = await getAddress_API()
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: fetchedAddress})
  }
}

export const updateAddress_redux = (data) => {
  return async (dispatch) => {
    dispatch({type: 'UPDATE_STATE_ADDRESS', payload: data})
  }
}
