const initialState = {
  pending: false,
  user: null
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'LOGIN_FULFILLED':
      return {
        ...state,
        pending: false
      }

    case 'LOGIN_REJECTED':
      return {
        ...state,
        pending: false
      }

        case 'USER_PENDING':
      return {
        ...state,
        pending: true
      }

    case 'USER_FULFILLED':
      console.log(action.payload)
      return {
        ...state,
        user: action.payload.data,
        pending: false
      }

    case 'USER_REJECTED':
      return {
        ...state,
        pending: false
      }

    default:
      return state;
  }
}