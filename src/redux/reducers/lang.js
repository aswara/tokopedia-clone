import stringLanguages from '../../utils/stringLanguages'

const initialState = stringLanguages

export default (state = initialState, action) => {
    switch (action.type) {  
      case 'CREATE_SETTING_LANGUAGE':
        return stringLanguages
  
      case 'RESET_STATE':
        return initialState
  
      default:
        return state;
    }
  }