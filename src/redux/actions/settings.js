import stringLanguages from '../../utils/stringLanguages'

export const setTheme = theme => {
  return {
    type: 'SET_THEME',
    payload: theme
  }
}

export function setLanguage(lang) {
  stringLanguages.setLanguage(lang);
  return {
    type: 'SET_LANGUAGE',
    payload: lang
  }
}

export function resetState() {
  return {
    type: 'RESET_STATE'
  }
}