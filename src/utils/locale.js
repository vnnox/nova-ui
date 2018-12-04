import Locales from '../locale'

export const getLocales = lang => {
  if (typeof Nova === 'object' && typeof Nova.config === 'object') {
    return Nova.config.locales[lang || Nova.config.lang]
  }
  return Locales[lang]
}

export default getLocales