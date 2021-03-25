export const addProduct = (product) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let defaultAddress = getState().address.data.filter(
      (address) => address.isDefault == true,
    )
    let newCheckout = {...currentCheckout}
    const newDate = new Date()
    let payload = {
      products: [],
      total: 0,
      shippingAddress: {},
      shippingMethod: {},
      discount: 0,
      date: newDate.toISOString(),
      status: 0,
      id_order: '',
    }
    if (defaultAddress) payload.shippingAddress = defaultAddress
    if (Object.keys(newCheckout).length === 0) {
      payload.products.push(product)
      payload.total = product.price * product.qty
      dispatch({type: 'UPDATE_STATE_CHECKOUT', payload})
    } else {
      if (newCheckout.products.length === 0) newCheckout.products.push(product)
      else {
        for (let i = 0; i < newCheckout.products.length; i++) {
          if (newCheckout.products[i]._id === product._id) {
            newCheckout.products[i].qty++
            break
          } else {
            newCheckout.products.push(product)
            break
          }
        }
      }

      let sum = newCheckout.products.reduce(function (
        accumulator,
        currentValue,
      ) {
        return accumulator + currentValue.price * currentValue.qty
      },
      0)
      newCheckout.total = sum
      dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
    }
  }
}

export const removeProduct = (product) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    newCheckout.products.forEach((currentProduct, index) => {
      if (currentProduct._id === product._id) {
        newCheckout.products.splice(index, 1)
        newCheckout.total -= product.price * product.qty
      }
    })
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const updateProductQty = (product, action) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    for (let i = 0; i < newCheckout.products.length; i++) {
      if (newCheckout.products[i]._id === product._id) {
        if (action === '+') {
          newCheckout.products[i].qty++
          newCheckout.total += product.price
          break
        } else {
          newCheckout.products[i].qty--
          newCheckout.total -= product.price
          break
        }
      }
    }
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const updateAddress = (address) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    newCheckout.shippingAddress = address
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const updateShippingMethod = (shippingMethod) => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    newCheckout.shippingMethod = shippingMethod
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const reOrder = (checkout) => {
  return (dispatch, getState) => {
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: checkout})
  }
}

export const paidCheckout = () => {
  return (dispatch, getState) => {
    let currentCheckout = getState().checkout.data
    let newCheckout = {...currentCheckout}
    newCheckout.status = 1
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: newCheckout})
  }
}

export const emptyCheckout = () => {
  return (dispatch) => {
    dispatch({type: 'UPDATE_STATE_CHECKOUT', payload: {}})
  }
}
