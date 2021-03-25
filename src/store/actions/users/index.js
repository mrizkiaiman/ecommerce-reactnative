export const addUser = (user) => {
  return (dispatch, getState) => {
    let usersDB = getState().users.data.slice()
    usersDB.push(user)
    dispatch({type: 'UPDATE_STATE_USER', payload: usersDB})
  }
}
