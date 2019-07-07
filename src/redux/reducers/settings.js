const initialState = {
  theme: 'light',
  language: 'en',
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'SET_THEME':
      return {
        ...state,
        theme: action.payload
      }

    case 'SET_LANGUAGE':
      return {
        ...state,
        language: action.payload
      }

    case 'RESET_STATE':
      return initialState

    default:
      return state;
  }
}